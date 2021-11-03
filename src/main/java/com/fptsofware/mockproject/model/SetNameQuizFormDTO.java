package com.fptsofware.mockproject.model;

import com.fptsofware.mockproject.entity.Category;

public class SetNameQuizFormDTO {
	private String name;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getCategory() {
		return category;
	}

	public void setCategory(int category) {
		this.category = category;
	}

	private int category;
}
