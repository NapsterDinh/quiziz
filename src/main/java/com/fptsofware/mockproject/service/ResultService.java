/*
 * @author Vi Diep
 * @date Sep 8, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fptsofware.mockproject.entity.Answer;
import com.fptsofware.mockproject.entity.Result;
import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.repository.ResultRepository;
import com.fptsofware.mockproject.repository.UserRepository;

@Service
public class ResultService implements IResultService {

	@Autowired
	private ResultRepository resultRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public Result saveResult(Result result) {
		return resultRepository.save(result);
	}

	@Override
	public List<Result> findResultByIdUser(int id) {
		User user = userRepository.findById(id);		
		return resultRepository.findByUserOrderByIdDesc(user);
	}

	@Override
	public Result updateResult(Result newResult) {
		// TODO Auto-generated method stub
		return resultRepository.findById(new Integer(newResult.getId()))
				.map(result -> {
						if(newResult.getFinishedDate()!=null) {
							result.setFinishedDate(newResult.getFinishedDate());
						}
						result.setListAnswers(newResult.getListAnswers()); 
						result.setScore(newResult.getScore());
						result.setTotalTime(newResult.getTotalTime());
						return resultRepository.save(result);})
				 .orElseGet(() -> {
				        return resultRepository.save(newResult);
				      });
		 
	}

	@Override
	public Result findResultById(int id) {
		// TODO Auto-generated method stub
		return resultRepository.findById(id);
	}



}
