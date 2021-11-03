package com.fptsofware.mockproject.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.fptsofware.mockproject.entity.Category;
import com.fptsofware.mockproject.entity.Question;
import com.fptsofware.mockproject.entity.Quiz;
import com.fptsofware.mockproject.entity.Result;
import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.model.QuizDTO;
import com.fptsofware.mockproject.model.ResultDTO;
import com.fptsofware.mockproject.model.UserDTO;
import com.fptsofware.mockproject.service.CategoryService;
import com.fptsofware.mockproject.service.IResultService;
import com.fptsofware.mockproject.service.QuizService;
import com.fptsofware.mockproject.service.UserService;
import com.fptsofware.mockproject.utils.ConverterModel;
import com.fptsofware.mockproject.utils.DateTimeUtils;
import com.fptsofware.mockproject.utils.GenerateCodeOfQuiz;
import com.fptsofware.mockproject.utils.UserUtils;

@Controller
public class ActivityController {
	@Autowired
	private CategoryService categoryService;
	
	@Autowired 
	private ConverterModel converterModel;
	
	@Autowired
	private QuizService quizService;
	
	@Autowired
	private IResultService resultService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserUtils userUtils;
	
	@Autowired
	private GenerateCodeOfQuiz generateCodeOfQuiz;
	
	@RequestMapping(value = { "/activity" }, method = RequestMethod.GET)
	public String login(Model model, @RequestParam("status") String status, Principal principal, HttpSession session,  @AuthenticationPrincipal OAuth2User principalGFFB) {
		
		List<Category> lstCategory = categoryService.geAllCategory();
		
		session.setAttribute("lstCategory", lstCategory);
		model.addAttribute("lstCategory", lstCategory);
		User currentUser = userUtils.getUserFromPrincipal(principal, principalGFFB, model);
		
		//Lấy hình, tên thông qua email
		model.addAttribute("userEmail", currentUser.getEmail());
		model.addAttribute("userName", currentUser.getName());
		model.addAttribute("userImage",currentUser.getImage());
		
//		UsernamePasswordAuthenticationToken authentication = (UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
		
//		System.out.println(authentication.getDetails());
//		
//		User loginedUser = (User) authentication.getDetails();
		
		List<QuizDTO> listQuiz = new ArrayList<QuizDTO>();
		switch (status) {
		case "running":
			//Get incomplete quiz
			listQuiz = quizService.getListQuizDTORunning(currentUser.getId());
			model.addAttribute("lstQuiz", listQuiz);
			break;
		case "completed":
			//Get complete quiz
			listQuiz = quizService.getListQuizDTOComplete(currentUser.getId());
			model.addAttribute("lstQuiz", listQuiz);	
			break;
		case "created":
			listQuiz = converterModel.convertToQuizDTO(quizService.getListQuizByUser(currentUser));
			model.addAttribute("lstQuiz", listQuiz);
			break;
		default:
			status = "running";
			listQuiz = quizService.getListQuizDTORunning(currentUser.getId());
			model.addAttribute("lstQuiz", listQuiz);
			break;
		}
		
		model.addAttribute("status", status);
		return "/activity";
	}
	
	@PostMapping("/api/search")
    public ResponseEntity<?> getSearchResultViaAjax(@RequestBody String search, Errors errors) {
	        QuizDTO quizDTO = new QuizDTO();
	        quizDTO.castFromQuiz(quizService.getQuizById(Integer.parseInt(search)));
	        
	        return ResponseEntity.ok(quizDTO);

	 }
	@RequestMapping(value = { "/activity/addNewQuiz" }, method = RequestMethod.POST)
	public String setnameQuiz(Model model,  @RequestParam(value = "nameinput", required = false) String name,
											@RequestParam(value = "idCategory", required = false) String idCategory,
											@RequestParam(value = "descriptionInput", required = false) String descriptionInput, HttpSession session, Principal principal) 
	{
//		QuizDTO tempQuiz = new QuizDTO();
//		tempQuiz.setName(name);
//		CategoryDTO tempCategory = new CategoryDTO();
//		tempCategory.setId(Integer.parseInt(idCategory));
//		tempQuiz.setCategory(tempCategory);
		User user = userService.getUserByUsername(principal.getName());
		
		Quiz tempQuiz = new Quiz();
		tempQuiz.setName(name);
		Category tempCate = new Category();
		tempCate.setId(Integer.parseInt(idCategory));
		
		tempQuiz.setCategory(tempCate);
		tempQuiz.setCreatedUser(user);
		tempQuiz.setCreatedDate(DateTimeUtils.getCurrentDate());
		tempQuiz.setPrivacy("Private");
		tempQuiz.setLevel("Easy");
		tempQuiz.setImage("../assets/image/quiz/1.jpg");
		tempQuiz.setCode(generateCodeOfQuiz.generateCodeOfQuiz());
		tempQuiz.setDescription(descriptionInput);
		
		int newQuizAddedId = quizService.addNewQuiz(tempQuiz);
		tempQuiz.setId(newQuizAddedId);
		
		session.setAttribute("tempQuiz", tempQuiz);
		
		model.addAttribute("newQuestion", new Question());
		return "/editQuizz";
	}
	
	
	
	
}
