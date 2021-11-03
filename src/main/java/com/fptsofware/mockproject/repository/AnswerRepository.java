/*
 * @author Vi Diep
 * @date Sep 8, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fptsofware.mockproject.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Integer> {

}
