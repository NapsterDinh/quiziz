/*
 * @author Vi Diep
 * @date Sep 8, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fptsofware.mockproject.entity.Answer;
import com.fptsofware.mockproject.repository.AnswerRepository;

@Service
public class AnswerService implements IAnswerService{

	@Autowired
	private AnswerRepository answerRepository;
	
	@Override
	public Answer getAnswerById(int id) {
		return answerRepository.getById(id);
	}

	
}
