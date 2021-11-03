package com.fptsofware.mockproject.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.exception.ErrorMessage;
import com.fptsofware.mockproject.model.UserDTO;
import com.fptsofware.mockproject.service.UserService;

@Controller
public class LoginController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private ErrorMessage errorMessage;
	
	/*
	 * //Kiểm tra đăng nhập
	 * 
	 * @PostMapping("/login_action") public String loginpost(final @Valid UserDTO
	 * userData, final BindingResult bindingResult, final Model model, HttpSession
	 * session) {
	 * 
	 * if(bindingResult.hasErrors()){ model.addAttribute("loginForm", userData);
	 * System.out.println("login that bai"); return "index"; }
	 * 
	 * User currentUser = userService.checklogin(userData.getUsername(),
	 * userData.getPassword()); if(currentUser == null) { bindingResult.addError(new
	 * ObjectError("error", "Invalid Username or Password"));
	 * System.out.println("login that bai"); return "index"; } else { UserDTO
	 * userDTO = new UserDTO(currentUser.getId(), currentUser.getUsername(),
	 * currentUser.getName(), currentUser.getEmail(), currentUser.getPassword(),
	 * currentUser.getDateOfBirth().toString(), currentUser.getImage());
	 * session.setAttribute("currentUser", userDTO);
	 * System.out.println("login thanh cong"); return "index"; } }
	 */
	
	//Đăng xuất
	@PostMapping("/logout")
	public String logout(HttpSession session) {
		return "index";
	}
	


}
