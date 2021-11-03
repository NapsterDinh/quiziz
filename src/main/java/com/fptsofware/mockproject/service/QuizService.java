package com.fptsofware.mockproject.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fptsofware.mockproject.entity.Category;
import com.fptsofware.mockproject.entity.Quiz;
import com.fptsofware.mockproject.entity.Result;
import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.model.QuizDTO;
import com.fptsofware.mockproject.model.ResultDTO;
import com.fptsofware.mockproject.repository.CategoryRepository;
import com.fptsofware.mockproject.repository.QuizRepository;
import com.fptsofware.mockproject.utils.ConverterModel;



@Service
public class QuizService implements IQuizService {
	@Autowired
	private QuizRepository quizRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private IResultService resultService;
	
	@Autowired
	private ConverterModel converterModel;
	
	@Autowired
	private IQuizService quizService;
	
	@Override
	public List<Quiz> getListQuiz(){
		return quizRepository.findAll();
	}
	
	@Override
	public List<Quiz> getListQuizByUser(User user) {
		return quizRepository.findByCreateduserId(user);
	}
	
	@Override
	public Quiz getQuizById(int id){
		return quizRepository.getById(id);
	}
	
	@Override
	public int addNewQuiz(Quiz quiz)
	{
		return quizRepository.save(quiz).getId();
	}

	@Override
	public List<Quiz> getQuizByCategory(int idCategory) {
		// TODO Auto-generated method stub
		Category category = categoryRepository.findById(idCategory);
		return quizRepository.findByCategory(category);
	}

	@Override
	public List<Quiz> getAllQuiz() {
		// TODO Auto-generated method stub
		return quizRepository.findAll();
	}

	@Override
	public Quiz getQuizByCode(String code) {
		// TODO Auto-generated method stub
		return quizRepository.findByCode(code);
	}

	@Override
	public List<QuizDTO> getListQuizDTORunning(int idUser) {
		// TODO Auto-generated method stub
		List<Result> listResult  = resultService.findResultByIdUser(idUser);
		List<ResultDTO> listResultDTO = converterModel.convertToListResultDTO(listResult);
		
		List<ResultDTO> listRunningResult = new ArrayList<ResultDTO>();
		for(int i =0 ;i< listResultDTO.size();i++) {
			if(listResultDTO.get(i).getFinishedDate()== null)
			{
				listRunningResult.add(listResultDTO.get(i));
			}
		}
		
		List<QuizDTO> listRunningQuiz = new ArrayList<QuizDTO>();
		for(int i =0; i< listRunningResult.size();i++)
		{
			QuizDTO quizdto = listRunningResult.get(i).getQuiz();
			quizdto.setCompletedQuestion(listRunningResult.get(i).getListAnswer().size());
			listRunningQuiz.add(quizdto);
		}
		return listRunningQuiz;
	}

	@Override
	public List<QuizDTO> getListQuizDTOComplete(int idUser) {
		// TODO Auto-generated method stub
		List<Result> listResult = resultService.findResultByIdUser(idUser);
		List<ResultDTO> listResultDTO = converterModel.convertToListResultDTO(listResult);
		List<ResultDTO> listCompleteResult = new ArrayList<ResultDTO>();
		for(int i =0 ;i< listResultDTO.size();i++) {
			if(listResultDTO.get(i).getFinishedDate()!= null)
			{
				listCompleteResult.add(listResultDTO.get(i));
			}
		}
		
		List<QuizDTO> listCompletedQuiz = new ArrayList<QuizDTO>();
		for(int i =0; i< listCompleteResult.size();i++)
		{
			QuizDTO quizdto = listCompleteResult.get(i).getQuiz();
			quizdto.setCompletedQuestion(listCompleteResult.get(i).getListAnswer().size());
			listCompletedQuiz.add(quizdto);
		}
		return listCompletedQuiz;
	}

	@Override
	public List<QuizDTO> getRecentQuiz(int idUser) {
		List<Result> listResult = resultService.findResultByIdUser(idUser);
		List<ResultDTO> listResultDTO = converterModel.convertToListResultDTO(listResult);
		List<QuizDTO> listRecentQuiz = new ArrayList<QuizDTO>();
		for(int i =0; i< listResultDTO.size();i++)
		{
			QuizDTO quizdto = listResultDTO.get(i).getQuiz();
			quizdto.setCompletedQuestion(listResultDTO.get(i).getListAnswer().size());
			listRecentQuiz.add(quizdto);
		}
		return listRecentQuiz;
	}
	

}
