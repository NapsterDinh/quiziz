package com.fptsofware.mockproject.utils;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.service.UserService;

@Component
public class UserUtils {
	@Autowired
	private UserService userService;
	public User getUserFromPrincipal(Principal principal, @AuthenticationPrincipal OAuth2User principalGGFB, Model model)
	{
		System.out.println("principal: "+ principal== null? "bang null": "khac null");
		User currentUser;
		if(principalGGFB != null)
		{
			String email = principalGGFB.getAttribute("email").toString();
			currentUser = userService.getUserByUsername(email);
			
		}
		else
		{
			if(principal != null)
			{
				currentUser = userService.getUserByUsername(principal.getName());
				model.addAttribute("userEmail", currentUser.getEmail());
				model.addAttribute("userName", currentUser.getName());
				model.addAttribute("userImage",currentUser.getImage());
			}
			else
			{
				return null;
			}
			
		}
		return currentUser;
	}
}
