package com.fptsofware.mockproject.utils;

import java.sql.Timestamp;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fptsofware.mockproject.entity.Quiz;
import com.fptsofware.mockproject.service.QuizService;

@Component
public class GenerateCodeOfQuiz {
	
	@Autowired
	private QuizService quizService;
	
	public String generateCodeOfQuiz()
	{	
			// create a string of all characters
		    String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		    // create random string builder
		    StringBuilder sb = new StringBuilder();

		    // create an object of Random class
		    Random random = new Random();

		    // specify length of random string
		    int length = 8;

		    for(int i = 0; i < length; i++) {

		      // generate random index number
		      int index = random.nextInt(alphabet.length());

		      // get character specified by index
		      // from the string
		      char randomChar = alphabet.charAt(index);

		      // append the character to string builder
		      sb.append(randomChar);
		    }

		    String randomString = sb.toString();
		    
		    if(quizService.getQuizByCode(randomString)==null)
		    {
		    	return randomString;
		    }
		    else
		    {
		    	generateCodeOfQuiz();
		    }
		return null;
	}
}
