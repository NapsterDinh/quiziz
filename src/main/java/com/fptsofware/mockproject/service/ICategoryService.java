/*
 * @author Vi Diep
 * @date Sep 5, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.service;

import java.util.List;

import com.fptsofware.mockproject.entity.Category;

public interface ICategoryService {
	public List<Category> getListCategory();
	public Category getCategoryByID(int id);
	public List<Category> geAllCategory();

}
