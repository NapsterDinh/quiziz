package com.fptsofware.mockproject.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.Collection;
import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fptsofware.mockproject.entity.Role_Facebook;
import com.fptsofware.mockproject.entity.Role_Google;
import com.sun.istack.NotNull;

public class UserDTO implements Serializable{
	private int id;
	
	@NotEmpty(message = "Enail can not be empty")
	@Email(message = "Please provide a valid email")
	private String username;
	
	@NotEmpty(message = "Name can not be empty")
	private String name;
	
	private String email;
	
	@NotEmpty(message = "Password can not be empty")
	private String password;
	
	private String dateOfBirth;
	private String image;
	private Role_Facebook role_fb;
	private Role_Google role_gg;
	private boolean accountNonLocked;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public Role_Facebook getRole_fb() {
		return role_fb;
	}
	public void setRole_fb(Role_Facebook role_fb) {
		this.role_fb = role_fb;
	}
	public Role_Google getRole_gg() {
		return role_gg;
	}
	public void setRole_gg(Role_Google role_gg) {
		this.role_gg = role_gg;
	}
	
	public UserDTO(int id, String username, String name,String email,String password, String dateOfBirth,
			String image) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.username = username;
		this.password = password;
		this.dateOfBirth = dateOfBirth;
		this.image = image;
	}
	public UserDTO()
	{
		
	}

	public UserDTO(int id,  String username, String name,String email, String password, String dateOfBirth,
			String image, Role_Facebook rolefb, Role_Google rolegg) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.username = username;
		this.password = password;
		this.dateOfBirth = dateOfBirth;
		this.image = image;
		this.role_fb = rolefb;
		this.role_gg = rolegg;
	}
	
	public UserDTO(int id, String username, String password, String image) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.image = image;
	}
	
	public boolean isAccountNonLocked() {
		return this.accountNonLocked;
	}
	public void setAccountNonLocked(boolean accountNonLocked) {
		this.accountNonLocked = accountNonLocked;
	}

	

	
}
