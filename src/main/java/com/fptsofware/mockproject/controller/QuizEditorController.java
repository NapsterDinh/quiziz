package com.fptsofware.mockproject.controller;

import java.io.File;
import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;

import com.fptsofware.mockproject.entity.Answer;
import com.fptsofware.mockproject.entity.Category;
import com.fptsofware.mockproject.entity.Question;
import com.fptsofware.mockproject.entity.Quiz;
import com.fptsofware.mockproject.model.QuestionDTO;
import com.fptsofware.mockproject.model.QuizDTO;
import com.fptsofware.mockproject.service.CategoryService;
import com.fptsofware.mockproject.service.QuestionService;
import com.fptsofware.mockproject.service.QuizService;
import com.fptsofware.mockproject.utils.FileUploadUtil;


@Controller
public class QuizEditorController {
	@Autowired
	QuizService quizService;

	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private QuestionService questionService;
	
	@Autowired
	ServletContext servletContext;
	public static final String SAVE_DIRECTORY = "assets/image/quiz";
	
	public static final String SAVE_DIRECTORY_QUESTION = "assets/image/question";
	

	@RequestMapping(value = { "/quizEditor/addQuestion" }, method = RequestMethod.POST)
	public String addQuestion(Model model, @ModelAttribute("newQuestion") Question ques, 
			@RequestParam("numeric-input") String isTrue, @RequestParam("duration") String duration,
			@RequestParam("idQuestion") String idQuestion, HttpSession session,
			@RequestParam("isRemoveImage") String isRemoveImage,
			@RequestParam(value = "button_upload_image_question", required = false) MultipartFile multipartFile) throws IOException {
		
		Quiz newQuiz = (Quiz) session.getAttribute("tempQuiz");
		
		String level = "";
		switch (ques.getLevel()) {
			case "0":
				level = "Easy";
				break;
			case "1":
				level = "Medium";
				break;
			case "2":
				level = "Advanced";
				break;
		default:
			level = "Easy";
			break;
		}
		
		String appPath = servletContext.getRealPath("");
		appPath = appPath.replace('\\', '/');

		String fullSavePath_sever = null;
		if (appPath.endsWith("/")) {
			fullSavePath_sever = appPath + SAVE_DIRECTORY;
		} else {
			fullSavePath_sever = appPath + "/" + SAVE_DIRECTORY;
		}

		String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());

		String fullFileName = "";

		if (FileUploadUtil.saveFile(fullSavePath_sever + File.separator, fileName, multipartFile)) {
			model.addAttribute("status", "success");
			System.out.println("success");
		} else {
			model.addAttribute("status", "failed");
			System.out.println("failed");
		}

		
		
		if(Integer.parseInt(idQuestion) == -1)
		{
			if(!multipartFile.isEmpty())
			{
				fullFileName ="/"+SAVE_DIRECTORY+"/"+fileName;
				System.out.println("check multipart file");
			}
			else
			{
				fullFileName = "";
			}
			//add
			Question question = new Question();
			question.setName("New Question");
			question.setLevel(level);
			question.setDescription(ques.getDescription());
			question.setImage(fullFileName);
			question.setDuration(Integer.parseInt(duration));
			question.setQuiz(newQuiz);
			List<Answer> ans = new ArrayList();
			
			for (int i = 0; i < 4; i++) {
				Answer answer = new Answer();
				System.out.print(ques.getAnswers().get(i).getDescription());
				answer.setDescription(ques.getAnswers().get(i).getDescription());
//				answer.setImage(fullFileName);
				answer.setTrue(i== Integer.parseInt(isTrue) ? true : false);
				ans.add(answer);
			}
			question.setAnswers(ans);
			
			session.setAttribute("tempQuiz", questionService.addNewQuestion(question, newQuiz, true));
			model.addAttribute("tempQuiz", questionService.addNewQuestion(question, newQuiz, true));
		}
		else
		{
			Question quesDB = questionService.getQuestionById(Integer.parseInt(idQuestion));
			if(!multipartFile.isEmpty())
			{
				fullFileName ="/"+SAVE_DIRECTORY+"/"+fileName;
				System.out.println("check multipart file");
			}
			else
			{
				if(Integer.parseInt(isRemoveImage)==1)
				{
					fullFileName = "";
				}
				else
				{
					if(quesDB.getImage() == "")
					{
						fullFileName = "";
					}
					else
					{
						fullFileName = quesDB.getImage();
					}
				}
				
			}
			
			//edit
			Question question = new Question();
			question.setId(Integer.parseInt(idQuestion));
			question.setName("New Question");
			question.setLevel(level);
			question.setDescription(ques.getDescription());
			question.setImage(fullFileName);
			question.setDuration(Integer.parseInt(duration));
			question.setQuiz(newQuiz);
			List<Answer> ans = new ArrayList();
			
			for (int i = 0; i < 4; i++) {
				Answer answer = new Answer();
				System.out.print(ques.getAnswers().get(i).getDescription());
				answer.setDescription(ques.getAnswers().get(i).getDescription());
				Question temp = Question.getQuestionByIdQuestion(Integer.parseInt(idQuestion), newQuiz.getQuestions());
				answer.setId(temp.getAnswers().get(i).getId());
//				answer.setImage(idQuestion)
				answer.setTrue(i== Integer.parseInt(isTrue) ? true : false);
				ans.add(answer);
			}
			question.setAnswers(ans);
			
			
			session.setAttribute("tempQuiz", questionService.addNewQuestion(question, newQuiz, false));
			model.addAttribute("tempQuiz", questionService.addNewQuestion(question, newQuiz, false));
		}
		return "/editQuizz";
	}
	
	@RequestMapping(value = { "/quizEditor/delelte" }, method = RequestMethod.POST)
	public String updateNameDescriptionQuiz(Model model, @ModelAttribute("idquestionDelete") int idquestionDelete, HttpSession session) 
	{
		Question question = questionService.getQuestionById(idquestionDelete);
		int idQuiz = question.getQuiz().getId();
		questionService.deleteQuestion(question);
		
		List<Category> lstCategory = categoryService.geAllCategory();
		
		session.setAttribute("lstCategory", lstCategory);
		session.setAttribute("tempQuiz", quizService.getQuizById(idQuiz));
		model.addAttribute("tempQuiz", quizService.getQuizById(idQuiz));
		model.addAttribute("newQuestion" ,new QuestionDTO());
		return "editQuizz";
	}
	
	@RequestMapping(value = { "/activity/updateNameDescription" }, method = RequestMethod.POST)
	public String updateNameDescriptionQuiz(Model model,  @RequestParam(value = "nameinput", required = false) String name,
											@RequestParam(value = "idCategory", required = false) String idCategory,
											@RequestParam(value = "descriptionInput", required = false) String descriptionInput, HttpSession session, Principal principal) 
	{
		Quiz currentQuiz = (Quiz) session.getAttribute("tempQuiz");
		currentQuiz.setName(name);
		
		Category tempCate = new Category();
		tempCate.setId(Integer.parseInt(idCategory));
		
		currentQuiz.setCategory(tempCate);
		currentQuiz.setDescription(descriptionInput);
		
		int updatedQuiz = quizService.addNewQuiz(currentQuiz);
		
		List<Category> lstCategory = categoryService.geAllCategory();
		
		session.setAttribute("lstCategory", lstCategory);
		session.setAttribute("tempQuiz", quizService.getQuizById(updatedQuiz));
		model.addAttribute("tempQuiz", quizService.getQuizById(updatedQuiz));
		model.addAttribute("newQuestion" ,new QuestionDTO());

		return "/editQuizz";
	}
	
	@RequestMapping(value = { "/editQuizz" }, method = RequestMethod.GET)
	public String editQuiz(Model model, HttpSession session)
	{
		List<Category> lstCategory = categoryService.geAllCategory();
		
		session.setAttribute("lstCategory", lstCategory);
		return "editQuizz";
	}

	@RequestMapping(value = { "/quizEditor/getQuiz" }, method = RequestMethod.GET)
	public String getQuizById(Model model, @RequestParam("id") int idQuiz, HttpSession session) {
		Quiz tempQuiz = quizService.getQuizById(idQuiz);
		session.setAttribute("tempQuiz", tempQuiz);
		
		List<Category> lstCategory = categoryService.geAllCategory();
		
		session.setAttribute("lstCategory", lstCategory);
		
		model.addAttribute("tempQuiz", tempQuiz);
		model.addAttribute("newQuestion" ,new QuestionDTO());
		return "/editQuizz";
	}

	@RequestMapping(value = { "/quizEditor/setImageandPrivacy" }, method = RequestMethod.POST)
	public String add(Model model, @ModelAttribute("tempQuiz") Quiz quiz,
			@RequestParam(value = "quizImage", required = false) MultipartFile multipartFile,
			HttpSession session) throws IOException {
		
		String appPath = servletContext.getRealPath("");
		appPath = appPath.replace('\\', '/');

		String fullSavePath_sever = null;
		if (appPath.endsWith("/")) {
			fullSavePath_sever = appPath + SAVE_DIRECTORY;
		} else {
			fullSavePath_sever = appPath + "/" + SAVE_DIRECTORY;
		}

		String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());

		Quiz tempQuiz = (Quiz) session.getAttribute("tempQuiz");
		
		if(!multipartFile.isEmpty())
		{
			tempQuiz.setImage("/"+SAVE_DIRECTORY+"/"+fileName);
			System.out.println("check multipart file");
		}
		
		tempQuiz.setPrivacy(quiz.getPrivacy());
		tempQuiz.setLevel(quiz.getLevel());
		
		session.setAttribute("tempQuiz", tempQuiz);
		
		//vi da ton tai nen gio se update
		quizService.addNewQuiz(tempQuiz);
		

		if (FileUploadUtil.saveFile(fullSavePath_sever + File.separator, fileName, multipartFile) && tempQuiz != null) {
			model.addAttribute("status", "success");
			System.out.println("success");
		} else {
			model.addAttribute("status", "failed");
			System.out.println("failed");
		}
		model.addAttribute("newQuestion" ,new QuestionDTO());
		List<Category> lstCategory = categoryService.geAllCategory();
		
		session.setAttribute("lstCategory", lstCategory);
		return "/editQuizz";

	}
}
