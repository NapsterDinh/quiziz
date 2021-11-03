package com.fptsofware.mockproject.model;

import java.util.ArrayList;
import java.util.List;

import com.fptsofware.mockproject.entity.Answer;
import com.fptsofware.mockproject.entity.Quiz;

public class QuestionDTO {
	private int id;
	
	private String name;

	private String level;

	private String description;

	private String image;

	private int idQuiz;

	private List<AnswerDTO> answers = new ArrayList<>(4);
	
	private int duration;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getIdQuiz() {
		return idQuiz;
	}
	public void setIdQuiz(int idQuiz) {
		this.idQuiz = idQuiz;
	}

	public List<AnswerDTO> getAnswers() {
		return answers;
	}

	public void setAnswers(List<AnswerDTO> answers) {
		this.answers = answers;
	}

	public int getId() {
		return id;
	}
	
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	
	
	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public void setId(int id) {
		this.id = id;
	}

	

	public QuestionDTO(int id, String name, String level, String description, String image, int idQuiz,
			List<AnswerDTO> answers, int duration) {
		this.id = id;
		this.name = name;
		this.level = level;
		this.description = description;
		this.image = image;
		this.idQuiz = idQuiz;
		this.answers = answers;
		this.duration = duration;
	}

	public QuestionDTO() {
	}
	
	
}