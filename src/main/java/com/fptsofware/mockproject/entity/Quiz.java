/*
 * @author Vi Diep
 * @date Aug 30, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.entity;

import java.util.ArrayList;
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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="quiz")
public class Quiz {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="description")
	private String description;
	
	@Column(name="size")
	private int size;
	
	@Column(name="image")
	private String image;
	
	@Column(name="createdDate")
	private String createdDate;
	
	@Column(name="quantityOfQuestion")
	private int quantityOfQuestion;
	
	@Column(name="level")
	private String level;
	
	@Column(name="code")
	private String code;
	
	@Column(name="privacy")
	private String privacy;
	
	@ManyToOne
	@JoinColumn(name="id_createdUser")
	private User createdUser;

	@ManyToOne
	@JoinColumn(name="id_category")
	private Category category;


	@OneToMany(mappedBy= "quiz")
	private List<Question> questions = new ArrayList<>();
	
	@ManyToMany
	@JoinTable(name="user_quiz",
			joinColumns = @JoinColumn(name="quiz_id"),
			inverseJoinColumns = @JoinColumn(name="user_id"))
	private List<User> listofUser = new ArrayList<>(30);
	
	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public int getSize() {
		return size;
	}


	public void setSize(int size) {
		this.size = size;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public String getCreatedDate() {
		return createdDate;
	}


	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}


	public int getQuantityOfQuestion() {
		return quantityOfQuestion;
	}


	public void setQuantityOfQuestion(int quantityOfQuestion) {
		this.quantityOfQuestion = quantityOfQuestion;
	}


	public String getLevel() {
		return level;
	}


	public void setLevel(String level) {
		this.level = level;
	}


	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	

	public User getCreatedUser() {
		return createdUser;
	}


	public void setCreatedUser(User createdUser) {
		this.createdUser = createdUser;
	}


	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}


	public int getId() {
		return id;
	}
	
	public void setId(int id)
	{
		this.id = id;
	}

	public List<Question> getQuestions() {
		return questions;
	}


	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}


	public String getPrivacy() {
		return privacy;
	}


	public void setPrivacy(String privacy) {
		this.privacy = privacy;
	}


	public List<User> getListofUser() {
		return listofUser;
	}


	public void setListofUser(List<User> listofUser) {
		this.listofUser = listofUser;
	}


	@Override
	public String toString() {
		return "\"Quiz [id=" + id + ", name=" + name + ", description=" + description + ", size=" + size + ", image="
				+ image + ", createdDate=" + createdDate + ", quantityOfQuestion=" + quantityOfQuestion + ", level="
				+ level + ", code=" + code + ", privacy=" + privacy + ", createdUser=" + createdUser + ", category="
				+ category + ", questions=" + questions + ", listofUser=" + listofUser + "]";
	}


	
	
	
	
	


	
	
	
}
