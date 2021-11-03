package com.fptsofware.mockproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fptsofware.mockproject.entity.Category;
import com.fptsofware.mockproject.entity.Quiz;
import com.fptsofware.mockproject.entity.User;


@Repository
public interface QuizRepository extends JpaRepository<Quiz, Integer> {
	
	//List<Quiz> findByCreateduserId(int id);
	
	@Query("select q from Quiz q where q.createdUser = ?1")
	List<Quiz> findByCreateduserId(User user);
	
	List<Quiz> findByCategory(Category category);
	
	Quiz findById(int id);
	
	Quiz findByCode(String code);
	
}
