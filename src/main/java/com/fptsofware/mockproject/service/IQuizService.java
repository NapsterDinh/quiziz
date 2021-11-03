/*
 * @author Vi Diep
 * @date Sep 5, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.service;

import java.util.List;

import com.fptsofware.mockproject.entity.Quiz;
import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.model.QuizDTO;

public interface IQuizService {

	List<Quiz> getQuizByCategory(int idCategory);
	
	List<Quiz> getAllQuiz();
	
	Quiz getQuizById(int id);
	
	int addNewQuiz(Quiz quiz);
	
	List<Quiz> getListQuiz();
	
	List<Quiz> getListQuizByUser(User user);
	Quiz getQuizByCode(String code);
	
	List<QuizDTO> getListQuizDTORunning(int idUser);
	List<QuizDTO> getRecentQuiz(int idUser);
	
	List<QuizDTO> getListQuizDTOComplete(int idUser);
	
}
	
	
	