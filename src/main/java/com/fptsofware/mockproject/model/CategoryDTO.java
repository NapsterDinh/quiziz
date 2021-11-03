package com.fptsofware.mockproject.model;

import java.util.ArrayList;
import java.util.List;

import com.fptsofware.mockproject.entity.Category;
import com.fptsofware.mockproject.entity.Quiz;


public class CategoryDTO {

	private int id;
	
	private String name;
	
	private String image;

	private List<QuizDTO> quizzes = new ArrayList<>();

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<QuizDTO> getQuizzes() {
		return quizzes;
	}

	public void setQuizzes(List<QuizDTO> quizzes) {
		this.quizzes = quizzes;
	}

	public int getId() {
		return id;
	}	
	
	public void setId(int id) {
		this.id = id;
	}
	
	public void castToCategory(Category category)
	{
		category.setId(this.id);
		category.setImage(this.image);
		category.setName(this.name);
		//category.setQuizzes(this.quizzes);
	}
}
