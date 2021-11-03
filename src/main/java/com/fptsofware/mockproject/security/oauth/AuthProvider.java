package com.fptsofware.mockproject.security.oauth;

import java.sql.Date;
import java.util.Collections;
import java.util.Optional;

import javax.servlet.ServletContext;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.fptsofware.mockproject.entity.Attempts;
import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.model.SecurityUserDetailsService;
import com.fptsofware.mockproject.repository.AttemptsRepository;
import com.fptsofware.mockproject.repository.UserRepository;
import com.fptsofware.mockproject.utils.DateTimeUtils;
import com.fptsofware.mockproject.utils.MD5;

@Component
public class AuthProvider implements AuthenticationProvider {
	private static final int ATTEMPTS_LIMIT = 10;
	@Autowired
	private SecurityUserDetailsService userDetailsService;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private AttemptsRepository attemptsRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private MD5 md5;
	@Autowired
	private DateTimeUtils datetimeUtils;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		String username = authentication.getName();
		Optional<Attempts> userAttempts = attemptsRepository.findAttemptsByName(username);

		UsernamePasswordAuthenticationToken upAuth = (UsernamePasswordAuthenticationToken) authentication; 
		String name = (String) authentication.getPrincipal();
			 
		String password = (String) upAuth.getCredentials();
		
		if(password == null)
		{
			throw new BadCredentialsException("You need to enter password");
		}
		else
		{
			String storedPassword = userRepository.findUserByUsername(name).map(User::getPassword)
					 	.orElseThrow(() -> new BadCredentialsException("illegal id or passowrd"));
			  
			if (Objects.equals(password, "") || !Objects.equals(md5.HashMD5(password),storedPassword)) 
			{ 
				processFailedAttempts(name, userRepository.findUserByUsername(name).get());
					 throw new BadCredentialsException("illegal id or passowrd"); 
				
			}
			
		}
		if(userAttempts.isPresent())
		{
			 Attempts attempts = userAttempts.get();
			 attempts.setAttempts(0);
			 attempts.setLastTime(datetimeUtils.getCurrentDateTime());
			 attemptsRepository.save(attempts);	
		}
		User user = userRepository.findUserByUsername(name).get();
		
		return new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword(), user.getAuthorities()); // (4);
	}

	private void processFailedAttempts(String username, User user) {
		Optional<Attempts> userAttempts = attemptsRepository.findAttemptsByName(username);

		if (userAttempts.isEmpty()) {
			Attempts attempts = new Attempts();
			attempts.setName(username);
			attempts.setAttempts(1);
			attempts.setLastTime(datetimeUtils.getCurrentDateTime());
			attemptsRepository.save(attempts);
		} else {
			Attempts attempts = userAttempts.get();
			attempts.setAttempts(attempts.getAttempts() + 1);
			attempts.setLastTime((datetimeUtils.getCurrentDateTime()));
			attemptsRepository.save(attempts);

			if (attempts.getAttempts() + 1 > ATTEMPTS_LIMIT) {
				user.setAccountNonLocked(false);
				attempts.setLastTime(datetimeUtils.getCurrentDateTime());
				userRepository.save(user);
				throw new LockedException("Too many invalid attempts. Account is locked!!");
			}
		}
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return true;
	}
}