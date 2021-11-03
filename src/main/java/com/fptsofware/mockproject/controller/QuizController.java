/*
 * @author Vi Diep
 * @date Sep 12, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.controller;

import java.security.Principal;
import java.sql.Date;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fptsofware.mockproject.entity.Answer;
import com.fptsofware.mockproject.entity.Question;
import com.fptsofware.mockproject.entity.Quiz;
import com.fptsofware.mockproject.entity.Result;
import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.model.AnswerDTO;
import com.fptsofware.mockproject.model.QuestionDTO;
import com.fptsofware.mockproject.model.QuizDTO;
import com.fptsofware.mockproject.model.ResultDTO;
import com.fptsofware.mockproject.service.IAnswerService;
import com.fptsofware.mockproject.service.IQuestionService;
import com.fptsofware.mockproject.service.IQuizService;
import com.fptsofware.mockproject.service.IResultService;
import com.fptsofware.mockproject.service.IUserService;
import com.fptsofware.mockproject.utils.ConverterModel;
import com.fptsofware.mockproject.utils.UserUtils;

@Controller
public class QuizController {
	
	@Autowired
	private IQuizService quizService;
	
	@Autowired
	private IResultService resultService;
	
	@Autowired
	private IAnswerService answerService;
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	private UserUtils userUtils;
	
	@Autowired
	private ConverterModel converterModel;
	
	@PostMapping("/start/{id}")
	public String start(Model model, @PathVariable("id") int id, Principal principal, @AuthenticationPrincipal OAuth2User principalGGFB) {
		User currentUser = userUtils.getUserFromPrincipal(principal, principalGGFB, model);
		
		//Create quiz with user when press Start
		User user = userService.getUserById(currentUser.getId());
		Quiz quiz = quizService.getQuizById(id);
		Date date = Date.valueOf(LocalDate.now());
		Result result = new Result(date, 0, user, quiz);
		result = resultService.saveResult(result);
		ResultDTO resultDTO= converterModel.convertResultDTO(result);
		model.addAttribute("resultGolbal", resultDTO);
		return "gameplay";
	}
	
	
	@GetMapping("/quiz/resume/{id}")
	public String resumeQuiz(Model model, @PathVariable("id") int id) {
		//continue with quiz is solving
		Result result = resultService.findResultById(id);
		ResultDTO resultDTO = converterModel.convertResultDTO(result);
		model.addAttribute("resultGolbal", resultDTO);
		return "gameplay";
	}
	
	@GetMapping("/summary/{id}")
	public String summaryQuiz(Model model, @PathVariable("id") int id) {
		//summary result
		Result result = resultService.findResultById(id);
		ResultDTO resultDTO = converterModel.convertResultDTO(result);
		int countTrue = 0;
		int countFalse = 0;
		for(int j =0 ;j <resultDTO.getListAnswer().size();j++) {
			if(resultDTO.getListAnswer().get(j).isTrue() == true) {
				countTrue++;
			}else {
				countFalse++;
			}
		}
		model.addAttribute("resultGolbal", resultDTO);
		model.addAttribute("countTrue", countTrue);
		model.addAttribute("countFalse",  countFalse);
		return "summary";
	}
	
	@GetMapping("/response/{id}")
	@ResponseBody
	public ResultDTO resumeQuizNext(Model model, @PathVariable("id") int id) {
		//Get next question
		Result result = resultService.findResultById(id);
		ResultDTO resultDTO = converterModel.convertResultDTO(result);
		return resultDTO;
	}
	
	
	@PutMapping("/continue/{id}")
	public String updateResult(Model model, @PathVariable("id") int id, @RequestParam int answerId, @RequestParam int scoreTotal, @RequestParam long totalTime) {
		//Save chosen answer's user
		Result result = resultService.findResultById(id);
		Answer answer = answerService.getAnswerById(answerId);
		result.getListAnswers().add(answer);
		result.setScore(scoreTotal);
		if(result.getQuizResult().getQuantityOfQuestion() == result.getListAnswers().size()) {
			Date date = Date.valueOf(LocalDate.now());
			result.setFinishedDate(date);
		}
		result.setTotalTime(totalTime);
		resultService.updateResult(result);
		return "gameplay";
	}
	
}
