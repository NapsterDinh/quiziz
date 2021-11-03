package com.fptsofware.mockproject.security.oauth;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

public class CustomOAuth2User implements OAuth2User {

	@Autowired
	private OAuth2User oauth2User;
	
	@Autowired
	private String clientName;
	
	
	public CustomOAuth2User(OAuth2User oAuth2User, String clientName) {
		this.oauth2User = oAuth2User;
		this.clientName = clientName;
	}

	@Override
	public Map<String, Object> getAttributes() {
		// TODO Auto-generated method stub
		return oauth2User.getAttributes();
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return oauth2User.getAuthorities();
	}

	@Override
	public String getName() {
		// TODO Auto-generated method stub
		return oauth2User.getAttribute("name");
	}
	
	public String getFullName() {
		// TODO Auto-generated method stub
		return oauth2User.getAttribute("name");
	}
	
	public String getEmail() {
		// TODO Auto-generated method stub
		return oauth2User.getAttribute("email");
	}
	
	public String getClientName() {
		// TODO Auto-generated method stub
		return this.clientName;
	}

}
