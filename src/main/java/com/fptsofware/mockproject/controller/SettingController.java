package com.fptsofware.mockproject.controller;

import java.io.File;
import java.io.IOException;
import java.security.Principal;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.fptsofware.mockproject.entity.Quiz;
import com.fptsofware.mockproject.entity.Role_Google;
import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.exception.UserNotFoundException;
import com.fptsofware.mockproject.service.UserService;
import com.fptsofware.mockproject.utils.FileUploadUtil;
import com.fptsofware.mockproject.utils.MD5;
import com.fptsofware.mockproject.utils.UserUtils;
import com.fptsofware.mockproject.service.UserService;

@Controller
public class SettingController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private MD5 MD5;
	
	@Autowired
	private UserUtils userUtils;
	
	@Autowired
	ServletContext servletContext;
	public static final String SAVE_DIRECTORY = "assets/image/user";

	@GetMapping("/setting")
	public String showSettingForm(Model model, @AuthenticationPrincipal OAuth2User principal, 
			Authentication authentication, Principal norprincipal) {
		String email="";
		if(principal!=null) {
			model.addAttribute("fbgguser", principal.getAttribute("email"));
			email = principal.getAttribute("email");
		}
		else {
			model.addAttribute("noruser", norprincipal.getName());
			email = norprincipal.getName();
		}
		User user = userService.getUserByUsername(email);
		//Role_Google roge_Google = user.getRole_gg();
		model.addAttribute("user", user);
		model.addAttribute("userEmail", user.getEmail());
		return "setting_user";
	}
	
	@RequestMapping(value="/setting/updateImage", method= {RequestMethod.POST, RequestMethod.GET})
	public String updateImage(HttpServletRequest request, Model model,
			@RequestParam(value = "button_upload_image_real", required = false) MultipartFile multipartFile,
			@AuthenticationPrincipal OAuth2User principalGGFB, Authentication authentication, Principal principal) throws UserNotFoundException, IOException {
		
		User currentUser = userUtils.getUserFromPrincipal(principal, principalGGFB, model);

		String email="";
		if(currentUser!=null) {
			model.addAttribute("fbgguser", currentUser.getEmail());
		}
		else {
			model.addAttribute("noruser", currentUser.getEmail());
		}
		
		email = currentUser.getEmail();
		
		String appPath = servletContext.getRealPath("");
		appPath = appPath.replace('\\', '/');

		String fullSavePath_sever = null;
		if (appPath.endsWith("/")) {
			fullSavePath_sever = appPath + SAVE_DIRECTORY;
		} else {
			fullSavePath_sever = appPath + "/" + SAVE_DIRECTORY;
		}

		String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
		
		model.addAttribute("userEmail", currentUser.getEmail());
		
		if(multipartFile.isEmpty() || currentUser.getImage() == ("/"+SAVE_DIRECTORY+"/"+fileName))
		{
			model.addAttribute("user", currentUser);
			return "setting_user";
		}			
		
		if (FileUploadUtil.saveFile(fullSavePath_sever + File.separator, fileName, multipartFile)) {
			currentUser.setImage("/"+SAVE_DIRECTORY+"/"+fileName);
			userService.updateImage(currentUser, "/"+SAVE_DIRECTORY+"/"+fileName);
			model.addAttribute("user", currentUser);
			model.addAttribute("message", "Image updated successfully!");
		} 	
	
		return "setting_user";
	}
	@RequestMapping(value="/setting/updateUsername",  method=RequestMethod.POST)
	//@RequestMapping(value="/setting/updateUsername", method= {RequestMethod.PUT, RequestMethod.GET})
	public String updateUserName(HttpServletRequest request, Model model,
			@AuthenticationPrincipal OAuth2User principal, Authentication authentication, Principal norprincipal) {
		String name = request.getParameter("username").trim();
		String email="";
		if(principal!=null) {
			model.addAttribute("fbgguser", principal.getAttribute("email"));
			email = principal.getAttribute("email");
		}
		else {
			model.addAttribute("noruser", norprincipal.getName());
			email = norprincipal.getName();
		}
		User user = userService.getUserByUsername(email);
		//Role_Google roge_Google = user.getRole_gg();
		if(isStringEmpty(name) || name.equals(user.getName())) {
			model.addAttribute("user", user);
			return "setting_user";
		}
		try {
			userService.updateName(user, name);
			model.addAttribute("user", user);
			model.addAttribute("message", "Username updated successfully!");
		} catch (UserNotFoundException ex) {
			model.addAttribute("user", user);
			model.addAttribute("errorusername", ex.getMessage());
		}
		return "setting_user";
	}
	 static boolean isStringEmpty(String string){
	        return string==null || string.length() == 0;
	    }
	//@PostMapping("/setting/updateBirthday")
	@RequestMapping(value="/setting/updateBirthday", method= {RequestMethod.POST})
	public String updateBirthday(HttpServletRequest request, Model model,
			@AuthenticationPrincipal OAuth2User principal, Authentication authentication, Principal norprincipal)   {
		String inputdate = request.getParameter("birthday");
		
		String email="";
		if(principal!=null) {
			model.addAttribute("fbgguser", principal.getAttribute("email"));
			email = principal.getAttribute("email");
		}
		else {
			model.addAttribute("noruser", norprincipal.getName());
			email = norprincipal.getName();
		}
		User user = userService.getUserByUsername(email);
		 Date birthday= Date.valueOf(inputdate);
		
		if( birthday.equals(user.getDateOfBirth())) {
			model.addAttribute("user", user);
			return "setting_user";
		}
		
		try {
			userService.updateBirthday(user,birthday );
			model.addAttribute("user", user);
			model.addAttribute("message", "Birthday updated successfully!");
		} catch (UserNotFoundException ex) {
			model.addAttribute("user", user);
			model.addAttribute("errorbirthday", ex.getMessage());
		}
		return "setting_user";
	}
	//@PostMapping("/setting/updatePassword")
	@RequestMapping(value="/setting/updatePassword", method= {RequestMethod.POST, RequestMethod.GET})
	public String updatePassword(HttpServletRequest request, Model model, 
			@AuthenticationPrincipal OAuth2User principal, Authentication authentication, Principal norprincipal)   {
		String password = request.getParameter("password");
		String confirmPssword = request.getParameter("confirmPssword");
		String email="";
		if(principal!=null) {
			model.addAttribute("fbgguser", principal.getAttribute("email"));
			email = principal.getAttribute("email");
		}
		else {
			model.addAttribute("noruser", norprincipal.getName());
			email = norprincipal.getName();
		}
		User user = userService.getUserByUsername(email);
		//Role_Google roge_Google = user.getRole_gg();
		
		if(!password.equals(confirmPssword))
		{
			model.addAttribute("user", user);
			model.addAttribute("errorpassword", "Re-password doesn't match password");
			return "setting_user";
		}
		if(isStringEmpty(password) || password.equals(user.getPassword())) {
			model.addAttribute("user", user);
			model.addAttribute("errorpassword", "The password is not blank and is the same as the old password");
			return "setting_user";
		}
		
		try {
			userService.updatePassword(user, MD5.HashMD5(password));
			model.addAttribute("user", user);
			model.addAttribute("message", "Password updated successfully!");
		} catch (UserNotFoundException ex) {
			model.addAttribute("user", user);
			model.addAttribute("errorpassword", ex.getMessage());
		}
		return "setting_user";
	}
//	public void loadData(User user,Role_Google roge_Google,Model model) {
//		model.addAttribute("user", user);
//		model.addAttribute("roge_Google", roge_Google);
//	}
	
}
