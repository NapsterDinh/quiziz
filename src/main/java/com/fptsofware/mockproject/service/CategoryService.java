package com.fptsofware.mockproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fptsofware.mockproject.entity.Category;
import com.fptsofware.mockproject.repository.CategoryRepository;


@Service
public class CategoryService implements ICategoryService{
	@Autowired
	private CategoryRepository categoryRepository;
	
	public List<Category> geAllCategory()
	{
		return categoryRepository.findAll();
	}
	
	@Override
	public Category getCategoryByID(int id) {
		return categoryRepository.findById(id);
	}
	
	@Override
	public List<Category> getListCategory() {
		return categoryRepository.findAll();
	}
}
