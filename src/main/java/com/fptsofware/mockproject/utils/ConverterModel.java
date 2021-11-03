/*
 * @author Vi Diep
 * @date Sep 11, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.utils;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.fptsofware.mockproject.entity.Answer;
import com.fptsofware.mockproject.entity.Question;
import com.fptsofware.mockproject.entity.Quiz;
import com.fptsofware.mockproject.entity.Result;
import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.model.AnswerDTO;
import com.fptsofware.mockproject.model.QuestionDTO;
import com.fptsofware.mockproject.model.QuizDTO;
import com.fptsofware.mockproject.model.ResultDTO;
import com.fptsofware.mockproject.model.UserDTO;


@Component
public class ConverterModel {
	public List<QuestionDTO> convertToQuestionDTO(List<Question> list) {
		List<QuestionDTO> listDTO =new ArrayList<>();
		for(Question question : list) {
			QuestionDTO dto = convertQuestionDTO(question);
			listDTO.add(dto);
		}
		return listDTO;
	}
	public UserDTO convertToUserDTO(User user) {
		return new UserDTO(user.getId(), user.getUsername(), user.getPassword(), user.getImage());	
	}
	public User convertToUser(UserDTO user) {
		return new User(user.getId(), user.getUsername(), user.getPassword(), user.getImage());	
	}
	public QuestionDTO convertQuestionDTO(Question question) {
		return new QuestionDTO(question.getId(), question.getName(), question.getLevel(), question.getDescription(), question.getImage(), question.getQuiz().getId(), convertToAnswerDTO(question.getAnswers()), question.getDuration());
	}
	public ResultDTO convertResultDTO(Result result) {
		return new ResultDTO(result.getId(), result.getStartedDate(), result.getFinishedDate(), result.getScore(),
					convertToUserDTO(result.getUser()) , convertToAnswerDTO(result.getListAnswers()), convertToQuizDTO(result.getQuizResult()), result.getTotalTime());
	}
	public List<ResultDTO> convertToListResultDTO(List<Result> list){
		List<ResultDTO> listDTO = new ArrayList<ResultDTO>();
		for(Result result : list) {
			ResultDTO  dto = convertResultDTO(result);
			listDTO.add(dto);
		}
		return listDTO;
	}
	
	public List<QuizDTO> convertToQuizDTO(List<Quiz> listQuiz){
		List<QuizDTO> listDTO = new ArrayList<>();
		for(Quiz quiz : listQuiz) {
			QuizDTO dto = convertToQuizDTO(quiz);
			listDTO.add(dto);
		}
		return listDTO;
	}
	public QuizDTO convertToQuizDTO(Quiz quiz) {
		return new QuizDTO(quiz.getId(),quiz.getName(), quiz.getDescription(), quiz.getSize(), quiz.getImage(), quiz.getCreatedDate(), quiz.getQuantityOfQuestion(), quiz.getLevel(), quiz.getCode(), quiz.getPrivacy(), convertToUserDTO(quiz.getCreatedUser()),quiz.getCategory().getId(), convertToQuestionDTO(quiz.getQuestions()));
	}
	
	public List<AnswerDTO> convertToAnswerDTO(List<Answer> list)
	{
		List<AnswerDTO> listDTO = new ArrayList<AnswerDTO>();
		for(Answer answer : list)
		{
			AnswerDTO dto = new AnswerDTO(answer.getId(), answer.getDescription(), answer.isTrue(), answer.getImage());
			listDTO.add(dto);
		}
		return listDTO;
	}
}
