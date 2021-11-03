/*
 * @author Vi Diep
 * @date Sep 5, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fptsofware.mockproject.entity.Answer;
import com.fptsofware.mockproject.entity.Category;
import com.fptsofware.mockproject.entity.Question;
import com.fptsofware.mockproject.entity.Quiz;
import com.fptsofware.mockproject.entity.Result;
import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.exception.ErrorMessage;
import com.fptsofware.mockproject.model.AnswerDTO;
import com.fptsofware.mockproject.model.QuestionDTO;
import com.fptsofware.mockproject.model.QuizDTO;
import com.fptsofware.mockproject.model.ResultDTO;
import com.fptsofware.mockproject.model.UserDTO;
import com.fptsofware.mockproject.service.ICategoryService;
import com.fptsofware.mockproject.service.IQuestionService;
import com.fptsofware.mockproject.service.IQuizService;
import com.fptsofware.mockproject.service.IResultService;
import com.fptsofware.mockproject.service.UserService;
import com.fptsofware.mockproject.utils.ConverterModel;
import com.fptsofware.mockproject.utils.UserUtils;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

@Controller
public class HomeController {

	@Autowired
	private ICategoryService categoryService;
	
	@Autowired
	private IQuizService quizService;
	
	@Autowired
	private IResultService resultService;
	
	@Autowired
	private UserService userService;

	@Autowired
	private ConverterModel converterModel;
	
	@Autowired
	private UserUtils userUtils;
	
	@Autowired
	private ErrorMessage errorMessage;
	
	@RequestMapping(value = {"/","/welcome", "/home","/login","/login?requiredLogin=true"}, method = RequestMethod.GET)
	public String home(HttpServletRequest request, Model model, HttpSession session, Principal principal, Authentication authentication, @AuthenticationPrincipal OAuth2User principalGGFB) {
		
		model.addAttribute("userData", new UserDTO());
		int idUser =-1;
		List<QuizDTO> listIncompletedQuiz = new ArrayList<>();
		User currentUser = userUtils.getUserFromPrincipal(principal, principalGGFB, model);
		if(currentUser == null)
		{
			idUser = -1;
		}
		else
		{
			idUser = currentUser.getId();
			//Get incomplete quiz
			listIncompletedQuiz = quizService.getRecentQuiz(idUser);
		}
		
		//Get category
		List<Category> list = categoryService.getListCategory();
		List<Category> listCategoryNotEmptyAndPublic = new ArrayList<>();
		for (Category category : list) {
			if(category.getQuizzes().size() >0)
			{
				List<Quiz> tempList = new ArrayList<>();
				
				for (Quiz quiz : category.getQuizzes()) {
					if(quiz.getPrivacy().equals("Public"))
					{
						tempList.add(quiz);
					}
				}
				
				if(tempList.size() >0 )
				{
					category.setQuizzes(tempList);
					listCategoryNotEmptyAndPublic.add(category);
				}
			}
		}

		model.addAttribute("listCategory", listCategoryNotEmptyAndPublic);
		session.setAttribute("lstCategory", listCategoryNotEmptyAndPublic);
		
		List<Quiz> listQuiz = quizService.getAllQuiz();	
		List<Quiz> listQuizPulic = new ArrayList<>();
		
		for (Quiz quiz : listQuiz) {
			if(quiz.getPrivacy().equals("Public"))
			{
				listQuizPulic.add(quiz);
			}
		}
		
		//Convert Quiz to QuizDTO
		List<QuizDTO> listDTO = new ArrayList<>();
		
		listDTO = converterModel.convertToQuizDTO(listQuizPulic);
		model.addAttribute("quizlist", listDTO);
		
		model.addAttribute("incompleteQuizList", listIncompletedQuiz);
		model.addAttribute("sizeInQuiz", listIncompletedQuiz.size());
		
		//Lấy hình, tên thông qua email
		session.setAttribute(
		         "error", errorMessage.getErrorMessage(request, "SPRING_SECURITY_LAST_EXCEPTION")
		      );
		
		return "homepage";
	}
	
	@GetMapping("/category/{id}")
	public String categoryId(Model model, @PathVariable("id") int id ) {
		Category category = categoryService.getCategoryByID(id);
		List<Quiz> listQuiz = quizService.getQuizByCategory(id);
		List<QuizDTO> listDTO = new ArrayList<>();
		listDTO = converterModel.convertToQuizDTO(listQuiz);
		model.addAttribute("quizlist", listDTO);
		model.addAttribute("nameCategory", category.getName());
		return "category";
	}
	
	@GetMapping("/quiz/{id}")
	public String quizId(Model model, @PathVariable("id") int id, Principal principal, HttpSession session,  @AuthenticationPrincipal OAuth2User principalGFFB) {
		User currentUser = userUtils.getUserFromPrincipal(principal, principalGFFB, model);
		Quiz quiz = quizService.getQuizById(id);
		QuizDTO quizdto = converterModel.convertToQuizDTO(quiz);
		List<Result> listResult = resultService.findResultByIdUser(currentUser.getId());
		List<ResultDTO> listResultDTO = converterModel.convertToListResultDTO(listResult);
		for(int i = 0 ;i < listResultDTO.size();i++)
		{
			if(listResultDTO.get(i).getFinishedDate()==null&& listResultDTO.get(i).getQuiz().getId() == id )
			{
				quizdto.setCompletedQuestion(listResultDTO.get(i).getListAnswer().size());
				model.addAttribute("idResult",listResultDTO.get(i).getId());
				model.addAttribute("quiz", quizdto);
				return "resume";				
			}
			else if(listResultDTO.get(i).getFinishedDate() !=null&& listResultDTO.get(i).getQuiz().getId() == id) {
				int countTrue =0;
				int countFalse=0;
				for(int j =0 ;j <listResultDTO.get(i).getListAnswer().size();j++) {
					if(listResultDTO.get(i).getListAnswer().get(j).isTrue() == true) {
						countTrue++;
					}else {
						countFalse++;
					}
				}
				model.addAttribute("resultGolbal", listResultDTO.get(i));
				model.addAttribute("countTrue", countTrue);
				model.addAttribute("countFalse",  countFalse);
				return "summary";
			}
			
		}		
		model.addAttribute("quiz", quiz);
		return "info";
	}
	
	@GetMapping("/quizCode/{code}")
	public String quizId(Model model, @PathVariable("code") String code, Principal principal, HttpSession session,  @AuthenticationPrincipal OAuth2User principalGFFB) {
		User currentUser = userUtils.getUserFromPrincipal(principal, principalGFFB, model);
		Quiz quiz = quizService.getQuizByCode(code);
		QuizDTO quizdto = converterModel.convertToQuizDTO(quiz);
		List<Result> listResult = resultService.findResultByIdUser(currentUser.getId());
		List<ResultDTO> listResultDTO = converterModel.convertToListResultDTO(listResult);
		for(int i = 0 ;i < listResultDTO.size();i++)
		{
			if(listResultDTO.get(i).getFinishedDate()==null&& listResultDTO.get(i).getQuiz().getId() == quiz.getId() )
			{
				quizdto.setCompletedQuestion(listResultDTO.get(i).getListAnswer().size());
				model.addAttribute("idResult",listResultDTO.get(i).getId());
				model.addAttribute("quiz", quizdto);
				return "resume";				
			}
			else if(listResultDTO.get(i).getFinishedDate() !=null&& listResultDTO.get(i).getQuiz().getId() == quiz.getId()) {
				int countTrue =0;
				int countFalse=0;
				for(int j =0 ;j <listResultDTO.get(i).getListAnswer().size();j++) {
					if(listResultDTO.get(i).getListAnswer().get(j).isTrue() == true) {
						countTrue++;
					}else {
						countFalse++;
					}
				}
				model.addAttribute("resultGolbal", listResultDTO.get(i));
				model.addAttribute("countTrue", countTrue);
				model.addAttribute("countFalse",  countFalse);
				return "summary";
			}
			
		}		
		model.addAttribute("quiz", quiz);
		return "info";	
	}
	
	@GetMapping("/requiz/{id}")
	public String reQuiz(Model model, @PathVariable("id") int id) {
		Quiz quiz = quizService.getQuizById(id);
		QuizDTO quizdto = converterModel.convertToQuizDTO(quiz);
		List<Result> listResult = resultService.findResultByIdUser(1);
		List<ResultDTO> listResultDTO = converterModel.convertToListResultDTO(listResult);
		for(int i = 0 ;i < listResultDTO.size();i++)
		{
			if(listResultDTO.get(i).getFinishedDate()==null&& listResultDTO.get(i).getListAnswer().get(0).getQuestion().getIdQuiz() == id)
			{
				quizdto.setCompletedQuestion(listResultDTO.get(i).getListAnswer().size());
				break;
			}
		}
		model.addAttribute("quiz", quizdto);
		return "resume";
	}
	
	@GetMapping("/start/{id}")
	public String start(Model model, @PathVariable("id") int id) {
		
		return "home";
	}
	
	@PostMapping("/add")
	@ResponseBody
	public String add(@RequestBody ResultDTO udto){
		Result result = new Result(udto.getStartedDate(), udto.getFinishedDate(), 0, 
				converterModel.convertToUser(udto.getUser()),java.util.Arrays.asList(new Answer("No", true, "")));
		resultService.saveResult(result);
		return "thanhcong";
	}
	
	@RequestMapping(value = {"/oath2success"}, method = RequestMethod.GET)
	public String getImageNameFBGG(HttpServletRequest request,Authentication user, Model model, @AuthenticationPrincipal OAuth2User principalGFFB, HttpSession session, Principal principal) {
		model.addAttribute("userData", new UserDTO());
		User currentUser = userUtils.getUserFromPrincipal(principal, principalGFFB, model);
		
		//Get category
				List<Category> list = categoryService.getListCategory();
				List<Category> listCategoryNotEmptyAndPublic = new ArrayList<>();
				for (Category category : list) {
					if(category.getQuizzes().size() >0)
					{
						List<Quiz> tempList = new ArrayList<>();
						
						for (Quiz quiz : category.getQuizzes()) {
							if(quiz.getPrivacy().equals("Public"))
							{
								tempList.add(quiz);
							}
						}
						
						if(tempList.size() >0 )
						{
							category.setQuizzes(tempList);
							listCategoryNotEmptyAndPublic.add(category);
						}
					}
				}

		model.addAttribute("listCategory", listCategoryNotEmptyAndPublic);
		session.setAttribute("lstCategory", listCategoryNotEmptyAndPublic);
			
		
		List<Quiz> listQuiz = quizService.getAllQuiz();	
		List<Quiz> listQuizPulic = new ArrayList<>();
		
		for (Quiz quiz : listQuiz) {
			if(quiz.getPrivacy().equals("Public"))
			{
				listQuizPulic.add(quiz);
			}
		}
		
		//Convert Quiz to QuizDTO
		List<QuizDTO> listDTO = new ArrayList<>();
		
		listDTO = converterModel.convertToQuizDTO(listQuizPulic);
		System.out.println("count: "+ listDTO.size());
		
		model.addAttribute("quizlist", listDTO);
		
		//Get incomplete quiz
		List<QuizDTO> listIncompletedQuiz = quizService.getRecentQuiz(currentUser.getId());
		
		model.addAttribute("incompleteQuizList", listIncompletedQuiz);
		model.addAttribute("sizeInQuiz", listIncompletedQuiz.size());
		session.setAttribute(
		         "error", errorMessage.getErrorMessage(request, "SPRING_SECURITY_LAST_EXCEPTION")
		      );
		//Lấy hình, tên thông qua email
		model.addAttribute("userEmail", currentUser.getEmail());
		model.addAttribute("userName", currentUser.getName());
		model.addAttribute("userImage",currentUser.getImage());
		return "homepage";
	}
	
	@GetMapping("/checkQuizCode/{code}")
	@ResponseBody
	public Boolean checkQuizCode(Model model, @PathVariable("code") String code) {
		Quiz quiz = quizService.getQuizByCode(code);
		if(quiz==null) {
			return false;
		}
		return true;
	}
	
	
	
	
}
