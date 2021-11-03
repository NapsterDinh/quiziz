package com.fptsofware.mockproject.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.web.filter.GenericFilterBean;

import com.fptsofware.mockproject.entity.User;

//public class FilterPersonalRequest extends GenericFilterBean{
//
//	  private static final String PARAM_NAME = "uio";
//	  private AuthenticationManager authenticationManager;
//	  
//	  private UserDetailsService userDetailsService;
//	  
//	  private final RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();
//
//	  private enum AuthenticationStates {
//	    REDIRECT, CONTINUE;
//	  }
//
//	  public void setAuthenticationManager(AuthenticationManager authenticationManager) {
//	    this.authenticationManager = authenticationManager;
//	  }
//
//	  public void setUserDetailsService(UserDetailsService userDetailsService) {
//	    this.userDetailsService = userDetailsService;
//	  }
//
//	  @Override
//	  public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException,
//	    ServletException {
//
//	    if (attemptAuthentication(request) == AuthenticationStates.REDIRECT) {
//	      // Note that we should handle that dynamically but for learning purposes we'll consider that one-shot
//	      // authentication works only for this URL
//	      this.redirectStrategy.sendRedirect((HttpServletRequest) request, (HttpServletResponse) response,
//	        "/secret/one-shot-action");
//	    } else {
//	      
//	      // continue execution of all other filters
//	      // You can test the code without this fragment in the pages without ?uio parameter. You should see blank page because of
//	      // security filter chain interruption.
//	      filterChain.doFilter(request, response);
//	    }
//	  }
//
//	  private AuthenticationStates attemptAuthentication(ServletRequest request) {
//	    AuthenticationStates state = AuthenticationStates.CONTINUE;
//	    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//	    User user = (User) request.getAttribute("currentUser");
//	    int idQuiz = Integer.parseInt(request.getAttribute("idQuiz").toString());
//	    
//	    return state;
//	  }
//}
