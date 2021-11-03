package com.fptsofware.mockproject.model;

import java.sql.Date;

public class UserDTOFB extends UserDTO{

	private String uid;
	private String token;
	

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public UserDTOFB(int id, String name, String email, String username, String password, String dateOfBirth,
			String image, String uid, String token) {
		super(id, name, email, username, password, dateOfBirth, image);
		this.uid = uid;
		this.token = token;
	}

	public UserDTOFB() {
		// TODO Auto-generated constructor stub
	}
	
	
	


	
	
}
