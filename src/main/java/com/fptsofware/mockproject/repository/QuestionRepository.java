/*
 * @author Vi Diep
 * @date Sep 7, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fptsofware.mockproject.entity.Question;
import com.fptsofware.mockproject.entity.Quiz;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
	List<Question> findByQuiz(Quiz quiz);
	
	Question findQuestionById(int id);

}
