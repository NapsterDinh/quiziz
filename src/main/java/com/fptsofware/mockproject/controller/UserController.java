package com.fptsofware.mockproject.controller;

import java.security.Principal;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fptsofware.mockproject.model.UserDTOFB;
import com.fptsofware.mockproject.model.UserJSONFB;
import com.fptsofware.mockproject.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userServiceImpl;
	

	@PostMapping
	public Principal getUser(Principal user) {
		System.out.println(user);
		return user;
	}
	@GetMapping
	public Principal getjUser(Principal user) {
		System.out.println(user);
		return user;
	}
	@PostMapping("/showfb")
	public UserJSONFB loadUsers(@RequestBody UserJSONFB user, Model model, HttpSession session) { //Phân tích JSON bắt được
		UserDTOFB userfb = new UserDTOFB();
		//Truyền dữ liệu 	
		userfb.setEmail(user.principal.attributes.email);
		session.setAttribute("userfbggimage", userServiceImpl.loadImage(user.principal.attributes.email));
		System.out.println(session.getAttribute("userfbggimage"));
		//Lưu session
		userServiceImpl.setCurentUserFB(session, userfb);
		return user;
	}

}