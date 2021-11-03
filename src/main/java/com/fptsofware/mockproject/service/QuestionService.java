/*
 * @author Vi Diep
 * @date Sep 7, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fptsofware.mockproject.entity.Answer;
import com.fptsofware.mockproject.entity.Question;
import com.fptsofware.mockproject.entity.Quiz;
import com.fptsofware.mockproject.entity.Result;
import com.fptsofware.mockproject.repository.AnswerRepository;
import com.fptsofware.mockproject.repository.QuestionRepository;
import com.fptsofware.mockproject.repository.QuizRepository;
import com.fptsofware.mockproject.repository.ResultRepository;

@Service
public class QuestionService implements IQuestionService{

	
	@Autowired
	private QuestionRepository questionRepository; 
	
	@Autowired
	private QuizRepository quizRepository;
	
	@Autowired
	private AnswerRepository answerRepository;
	
	@Autowired
	private ResultRepository resultRepository;
	
	@Override
	public List<Question> getListQuestionByIdQuiz(int id) {
		Quiz quiz = quizRepository.getById(id);
		return questionRepository.findByQuiz(quiz);
	}

	@Override
	public Quiz addNewQuestion(Question ques, Quiz quiz, boolean isAdd) {
		// TODO Auto-generated method stub
		Question newQuestionAdded = questionRepository.save(ques);
		int id = newQuestionAdded.getId();
		
		for (Answer item : ques.getAnswers()) {
			item.setQuestion(newQuestionAdded);
			answerRepository.save(item);
		}
		//update lai size and quantity question in quiz
		Quiz  quizNew = quizRepository.getById(quiz.getId());
		if(isAdd)
		{
			quizNew.setSize(quiz.getSize()+1);
			quizNew.setQuantityOfQuestion(quiz.getSize()+1);
		}
		
		if(quizRepository.save(quizNew)==null)
		{
			return null;
		}
		else
		{
			return quizNew;
		}
	}
	@Override
	public void deleteQuestion(Question ques) 
	{
		//delete chosen first
		//delete result second
		
		//delete answer third
		
		//finally delete question
		
		
		for (Answer ans : ques.getAnswers()) {
			if(ans.getResults().size() != 0)
			{
				for (Result result : ans.getResults()) {
					ans.removeResult(result);
				}
				for (Result result : ans.getResults()) {
					resultRepository.delete(result);
				}
			}
			
		}
		
		for (Answer ans : ques.getAnswers()) {
			answerRepository.delete(ans);
		}
		
		questionRepository.deleteById(ques.getId());
		
		//update lai size and quantity question in quiz
		Quiz  quizNew = quizRepository.getById(ques.getQuiz().getId());
		quizNew.setSize(quizNew.getQuestions().size());
		quizNew.setQuantityOfQuestion(quizNew.getQuestions().size());
		quizRepository.save(quizNew);
	}
	
	@Override
	public Question getQuestionById(int id)
	{
		return questionRepository.getById(id);
	}
	
	

}
