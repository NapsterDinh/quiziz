/*
 * @author Vi Diep
 * @date Aug 30, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
@Table(name = "result")
public class Result {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column
	private Date startedDate;

	@Column
	private Date finishedDate;

	@Column
	private int score;

	@Column
	private Long totalTime;

	@ManyToOne
	@JoinColumn(name = "id_user")
	private User user;

	@ManyToOne
	@JoinColumn(name = "id_quiz")
	private Quiz quizResult;

	@LazyCollection(LazyCollectionOption.FALSE)
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "chosen", joinColumns = @JoinColumn(name = "id_result"), inverseJoinColumns = @JoinColumn(name = "id_answer"))
	private List<Answer> listAnswers = new ArrayList<>();
	
	

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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getId() {
		return id;
	}

	public Date getStartedDate() {
		return startedDate;
	}

	public void setStartedDate(Date startedDate) {
		this.startedDate = startedDate;
	}

	public Result() {
	}

	public List<Answer> getListAnswers() {
		return (List<Answer>) listAnswers;
	}

	public void setListAnswers(List<Answer> listAnswers) {
		this.listAnswers = listAnswers;
	}

	public Quiz getQuizResult() {
		return quizResult;
	}

	public void setQuizResult(Quiz quizResult) {
		this.quizResult = quizResult;
	}

	public Long getTotalTime() {
		return totalTime;
	}

	public void setTotalTime(Long totalTime) {
		this.totalTime = totalTime;
	}

	public Result(Date startedDate, Date finishedDate, int score, User user, List<Answer> listAnswers) {
		this.startedDate = startedDate;
		this.finishedDate = finishedDate;
		this.score = score;
		this.user = user;
		this.listAnswers = listAnswers;
	}

	public Result(Date startedDate, int score, User user) {
		this.startedDate = startedDate;
		this.score = score;
		this.user = user;
	}

	public Result(Date startedDate, int score, User user, Quiz quizResult) {
		this.startedDate = startedDate;
		this.score = score;
		this.user = user;
		this.quizResult = quizResult;
	}

}
