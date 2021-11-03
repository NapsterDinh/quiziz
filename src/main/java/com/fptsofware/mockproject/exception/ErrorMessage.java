package com.fptsofware.mockproject.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.stereotype.Component;

@Component
public class ErrorMessage {
	public String getErrorMessage(HttpServletRequest request, String key) {
	      Exception exception = (Exception) request.getSession().getAttribute(key); 
	      String error = ""; 
	      if (exception instanceof BadCredentialsException) { 
	         error = "Invalid username and password!"; 
	      } else if (exception instanceof LockedException) { 
	         error = exception.getMessage(); 
	      } else { 
	         error = "Invalid username and password!"; 
	      } 
	      return error;
	   }
}
