/*
 * @author Vi Diep
 * @date Sep 7, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.service;

import java.util.List;

import com.fptsofware.mockproject.entity.Question;
import com.fptsofware.mockproject.entity.Quiz;

public interface IQuestionService {

	List<Question> getListQuestionByIdQuiz(int id);
	
	Quiz addNewQuestion(Question ques, Quiz quiz, boolean isTrue);
	
	void deleteQuestion(Question ques);
	
	Question getQuestionById(int id);

}
