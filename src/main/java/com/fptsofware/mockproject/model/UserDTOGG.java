package com.fptsofware.mockproject.model;

import java.sql.Date;

public class UserDTOGG extends UserDTO {
	private String nameGG;
	private String token;
	
	
	public String getNameGG() {
		return nameGG;
	}
	public void setNameGG(String nameGG) {
		this.nameGG = nameGG;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public UserDTOGG(int id, String name, String email, String username, String password, String dateOfBirth,
			String image, String nameGG, String token) {
		super(id, name, email, username, password, dateOfBirth, image);
		this.nameGG = nameGG;
		this.token = token;
	}
	
	

}
