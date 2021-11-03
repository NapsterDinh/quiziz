/*
 * @author Vi Diep
 * @date Aug 30, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;



@Entity
@Table(name="user")
public class User implements UserDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column
	private String username;
	
	@Column
	private String name;
	
	@Column
	private String email;
	
	@Column
	private String password;

	@Column
	private Date dateOfBirth;
	
	@Column
	private String image;
	
	@Column
	private boolean accountNonLocked = true;
	
	@Column
	private String tokenForgot;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "role_fb", referencedColumnName = "id")
    private Role_Facebook role_fb;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "role_gg", referencedColumnName = "id")
    private Role_Google role_gg;
	
	@ManyToMany(fetch =FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinTable(name="user_role",
			joinColumns = @JoinColumn(name="user_id"),
			inverseJoinColumns = @JoinColumn(name="role_id"))
	private List<Role> roles = new ArrayList<>();

	@OneToMany(mappedBy= "createdUser")
	private List<Quiz> quizzes = new ArrayList<>();

	@OneToMany(mappedBy= "user")
	private List<Result> results = new ArrayList<>();
	
	@ManyToMany(mappedBy = "results")
	private List<Answer> answers = new ArrayList<>();
	
	@ManyToMany(mappedBy = "listofUser")
	private List<Quiz> listOfQuizz = new ArrayList<>();
	
	
	public void setAccountNonLocked(boolean accountNonLocked) {
		this.accountNonLocked = accountNonLocked;
	}
	
	public String getTokenForgot() {
		return tokenForgot;
	}

	public void setTokenForgot(String tokenForgot) {
		this.tokenForgot = tokenForgot;
	}

	@Override
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	@Override
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
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

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	public int getId() {
		return id;
	}
	
	public void setID(int id) {
		this.id = id;
	}

	public List<Quiz> getQuizzes() {
		return quizzes;
	}

	public void setQuizzes(List<Quiz> quizzes) {
		this.quizzes = quizzes;
	}

	public List<Result> getResults() {
		return results;
	}

	public void setResults(List<Result> results) {
		this.results = results;
	}

	public List<Answer> getAnswers() {
		return answers;
	}

	public void setAnswers(List<Answer> answers) {
		this.answers = answers;
	}

	public List<Quiz> getListOfQuizz() {
		return listOfQuizz;
	}

	public void setListOfQuizz(List<Quiz> listOfQuizz) {
		this.listOfQuizz = listOfQuizz;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "{'id': '"+id+"', 'username': '"+username+"', 'password':'"+password+"', 'dateOfBirth': '"+dateOfBirth+"', 'image': '"+image+"'}";
	}

	public User(int id, String username, String name, String email, String password, Date dateOfBirth, String image,
			Role_Facebook role_fb, Role_Google role_gg) {
		super();
		this.id = id;
		this.username = username;
		this.name = name;
		this.email = email;
		this.password = password;
		this.dateOfBirth = dateOfBirth;
		this.image = image;
		this.role_fb = role_fb;
		this.role_gg = role_gg;
	}
	public User()
	{
		
	}

	public User(String username, String name, String email, String password, Date dateOfBirth, String image,
			Role_Facebook role_fb, Role_Google role_gg) {
		super();
		this.username = username;
		this.name = name;
		this.email = email;
		this.password = password;
		this.dateOfBirth = dateOfBirth;
		this.image = image;
		this.role_fb = role_fb;
		this.role_gg = role_gg;
	}
	
	public User(int id, String username, String password, String image) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.image = image;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return List.of(() -> "read"); 
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return accountNonLocked;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
	
	
	
	
	
}
