/*
 * @author Vi Diep
 * @date Aug 30, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="answer")
public class Answer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column
	private String description;
	
	@Column(columnDefinition = "bit default 0", nullable = false)
	private boolean isTrue;
	
	@Column
	private String image;
	
	@ManyToOne
	@JoinColumn(name="id_question")
	private Question question;
	
	
	@ManyToMany(mappedBy = "listAnswers")
	private List<Result> results = new ArrayList<>();
	

	public String getDescription() {
		return description;
	}
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isTrue() {
		return isTrue;
	}

	public void setTrue(boolean isTrue) {
		this.isTrue = isTrue;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public int getId() {
		return id;
	}
	public void setId(int id)
	{
		this.id = id;
	}

	public List<Result> getResults() {
		return results;
	}

	public void setResults(List<Result> results) {
		this.results = results;
	}
	public Answer(String description, boolean isTrue, String image) {
		this.description = description;
		this.isTrue = isTrue;
		this.image = image;
	}
	
	public Answer(String description, boolean isTrue, String image, Question question, List<Result> results) {
		super();
		this.description = description;
		this.isTrue = isTrue;
		this.image = image;
		this.question = question;
		this.results = results;
	}
	public Answer()
	{
		
	}
	public void removeResult(Result b) {
		results.remove(b);
        b.getListAnswers().remove(this);
    }  

}
