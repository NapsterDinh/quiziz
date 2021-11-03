/*
 * @author Vi Diep
 * @date Sep 8, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.model;

import java.sql.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

public class ResultDTO {

	private int id;

	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date startedDate;

	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date finishedDate;
	private int score;
	private UserDTO user;
	private List<AnswerDTO> listAnswer;
	private QuizDTO quiz;
	private Long totalTime;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getStartedDate() {
		return startedDate;
	}

	public void setStartedDate(Date startedDate) {
		this.startedDate = startedDate;
	}

	public Date getFinishedDate() {
		return finishedDate;
	}

	public void setFinishedDate(Date finishedDate) {
		this.finishedDate = finishedDate;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public List<AnswerDTO> getListAnswer() {
		return listAnswer;
	}

	public void setListAnswer(List<AnswerDTO> listAnswer) {
		this.listAnswer = listAnswer;
	}

	public ResultDTO() {
	}

	public ResultDTO(int id, Date startedDate, Date finishedDate, int score, UserDTO user) {
		this.id = id;
		this.startedDate = startedDate;
		this.finishedDate = finishedDate;
		this.score = score;
		this.user = user;
	}

	public QuizDTO getQuiz() {
		return quiz;
	}

	public void setQuiz(QuizDTO quiz) {
		this.quiz = quiz;
	}

	public Long getTotalTime() {
		return totalTime;
	}

	public void setTotalTime(Long totalTime) {
		this.totalTime = totalTime;
	}

	public ResultDTO(int id, Date startedDate, Date finishedDate, int score, UserDTO user, List<AnswerDTO> listAnswer,
			QuizDTO quiz, Long totalTime) {
		this.id = id;
		this.startedDate = startedDate;
		this.finishedDate = finishedDate;
		this.score = score;
		this.user = user;
		this.listAnswer = listAnswer;
		this.quiz = quiz;
		this.totalTime = totalTime;
	}
	
	
	
}
