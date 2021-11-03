package com.fptsofware.mockproject.model;

import java.util.ArrayList;
import java.util.List;



public class AnswerDTO {
	
	private int id;
	
	private String description;
	
	private boolean isTrue;
	
	private String image;
	
	private QuestionDTO question;
	
	private List<ResultDTO> results = new ArrayList<>();
	

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isTrue() {
		return isTrue;
	}

	public void setTrue(boolean isTrue) {
		this.isTrue = isTrue;
	}

	public QuestionDTO getQuestion() {
		return question;
	}

	public void setQuestion(QuestionDTO question) {
		this.question = question;
	}

	public int getId() {
		return id;
	}

	public List<ResultDTO> getResults() {
		return results;
	}

	public void setResults(List<ResultDTO> results) {
		this.results = results;
	}
	
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public void setId(int id) {
		this.id = id;
	}

	public AnswerDTO(int id, String description, boolean isTrue, String image, QuestionDTO question,
			List<ResultDTO> results) {
		this.id = id;
		this.description = description;
		this.isTrue = isTrue;
		this.image = image;
		this.question = question;
		this.results = results;
	}
	
	public AnswerDTO(int id, String description, boolean isTrue, String image, QuestionDTO question) {
		this.id = id;
		this.description = description;
		this.isTrue = isTrue;
		this.image = image;
		this.question = question;
	}
	
	
	public AnswerDTO(int id, String description, boolean isTrue, String image) {
		this.id = id;
		this.description = description;
		this.isTrue = isTrue;
		this.image = image;
	}

	public AnswerDTO() {
	}
}