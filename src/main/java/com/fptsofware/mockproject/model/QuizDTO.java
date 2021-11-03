package com.fptsofware.mockproject.model;

import java.util.ArrayList;
import java.util.List;

import com.fptsofware.mockproject.entity.Quiz;

public class QuizDTO {

	private int id;
	
	private String name;
	
	private String description;
	
	private int size;
	
	private String image;
	
	private String createdDate;
	
	private int quantityOfQuestion;

	private String level;
	
	private String code;
	
	private String privacy;
	
	private UserDTO createdUser;

	private int category;
	
	private List<QuestionDTO> listQuestion = new ArrayList<>();
	
	private List<UserDTO> listofUser = new ArrayList<>();
	
	private int completedQuestion;
	
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

	public UserDTO getCreatedUser() {
		return createdUser;
	}


	public void setCreatedUser(UserDTO createdUser) {
		this.createdUser = createdUser;
	}


	public int getCategory() {
		return category;
	}


	public void setCategory(int category) {
		this.category = category;
	}


	public int getId() {
		return id;
	}


	public List<QuestionDTO> getQuestions() {
		return listQuestion;
	}


	public void setQuestions(List<QuestionDTO> questions) {
		this.listQuestion = questions;
	}


	public String getPrivacy() {
		return privacy;
	}


	public void setPrivacy(String privacy) {
		this.privacy = privacy;
	}


	public List<UserDTO> getListofUser() {
		return listofUser;
	}


	public void setListofUser(List<UserDTO> listofUser) {
		this.listofUser = listofUser;
	}
	
	public void castFromQuiz(Quiz quiz)
	{
		this.id = quiz.getId();
		this.name = quiz.getName();
		this.image = quiz.getImage();
		this.size = quiz.getSize();
	}
	
	public int getCompletedQuestion() {
		return completedQuestion;
	}
	public void setCompletedQuestion(int completedQuestion) {
		this.completedQuestion = completedQuestion;
	}
	
	public QuizDTO() {
	}


	public QuizDTO(int id, String name, String description, int size, String image, String createdDate,
			int quantityOfQuestion, String level, String code, String privacy, UserDTO createdUser, int category,
			List<QuestionDTO> listQuestion) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.size = size;
		this.image = image;
		this.createdDate = createdDate;
		this.quantityOfQuestion = quantityOfQuestion;
		this.level = level;
		this.code = code;
		this.privacy = privacy;
		this.createdUser = createdUser;
		this.category = category;
		this.listQuestion = listQuestion;
	}


	
	
	
	


}

