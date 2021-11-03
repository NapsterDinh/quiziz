package com.fptsofware.mockproject.security.oauth;

import java.io.IOException;
import java.util.Map;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.service.UserService;

@Component
public class OAuth2LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

	
	@Autowired
	UserService userService;
	
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		
		CustomOAuth2User oAuth2User = (CustomOAuth2User) authentication.getPrincipal();
		String clientName = oAuth2User.getClientName();
		String email = oAuth2User.getEmail();
		String name =  oAuth2User.getName();		
		Map<String, Object> token = oAuth2User.getAttributes();
		
		User user = userService.getUserByUsername(email);
		
		//check user existed or not
		if(user!=null)	//user existed
		{
			//update user existed
			userService.updateNewUserAfterOAuthLoginSuccess(user,token,clientName);
			
		}else {			//user is new
			//register new user
			userService.createNewUserAfterOAuthLoginSuccess(email,name,token,clientName);
		}
		this.setDefaultTargetUrl("/oath2success");
		
		super.onAuthenticationSuccess(request, response, authentication);
	}

	
	

}
