package com.fptsofware.mockproject.model;

import java.util.List;

import com.fptsofware.mockproject.entity.Quiz;

public class ResponseActivity {
	
	String msg;
    Quiz result;
    
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Quiz getResult() {
		return result;
	}
	public void setResult(Quiz result) {
		this.result = result;
	}
    
    
}
