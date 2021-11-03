/*
 * @author Vi Diep
 * @date Aug 30, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "role_gg")
public class Role_Google {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column
	private String name;

	@Column
	private String token;

	@OneToOne(mappedBy = "role_gg")
	private User user;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public int getId() {
		return id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Role_Google(String name, String token) {
		this.name = name;
		this.token = token;
	}

	public Role_Google() {
	}

	

}
