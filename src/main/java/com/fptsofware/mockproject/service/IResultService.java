/*
 * @author Vi Diep
 * @date Sep 8, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.service;

import java.util.List;

import com.fptsofware.mockproject.entity.Answer;
import com.fptsofware.mockproject.entity.Result;

public interface IResultService {
	
	public Result saveResult(Result result);
	public List<Result> findResultByIdUser(int id);
	public Result updateResult(Result newResult);
	public Result findResultById(int id);

}
