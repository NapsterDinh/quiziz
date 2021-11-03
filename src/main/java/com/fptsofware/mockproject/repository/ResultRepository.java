/*
 * @author Vi Diep
 * @date Sep 8, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fptsofware.mockproject.entity.Answer;
import com.fptsofware.mockproject.entity.Result;
import com.fptsofware.mockproject.entity.User;

public interface ResultRepository extends JpaRepository<Result, Integer> {
	public List<Result> findByUserOrderByIdDesc(User user);
	public Result findById(int id);
}
