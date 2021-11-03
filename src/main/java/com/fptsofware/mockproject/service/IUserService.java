/*
 * @author Vi Diep
 * @date Sep 5, 2021
 * @version 1.0
*/
package com.fptsofware.mockproject.service;

import java.sql.Date;
import java.text.ParseException;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.security.core.userdetails.UserDetails;

import com.fptsofware.mockproject.entity.Role_Facebook;
import com.fptsofware.mockproject.entity.Role_Google;
import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.exception.UserNotFoundException;
import com.fptsofware.mockproject.model.UserDTO;
import com.fptsofware.mockproject.model.UserDTOFB;

public interface IUserService {
	User checklogin(String username, String password);

	String loadImage(String username);

	// check user existed
	boolean checkUserNameExisted(UserDTO userDto);

	// registration
	User save(UserDTO userDto) throws ParseException;
	
	User getUserByUsername(String username);
	
	void createUser(UserDetails user);
	
	void updateNewUserAfterOAuthLoginSuccess(User user, Map<String, Object> token, String clientName);
	
	void createNewUserAfterOAuthLoginSuccess(String email, String name, Map<String, Object> token,
			String clientName);
	
	void updatePassword(User user, String newPassword) throws UserNotFoundException;
	
	void updateImage(User user, String image) throws UserNotFoundException;
	
	void updateName(User user, String name) throws UserNotFoundException;
	
	void updateBirthday(User user, Date birthday) throws UserNotFoundException;
	
	void updateUsername(User user, String username) throws UserNotFoundException;
	
	User getByIdUser(int id);
	 
	void updatePasswordbyToken(User user, String newPassword);
	
	Role_Google getByResetPasswordToken(String token);
	
	void updateResetPasswordToken(String token, String email) throws UserNotFoundException;
	
	void removeCurrentUser(HttpSession session);
	
	void setCurentUserFB(HttpSession session, UserDTOFB userdtofb);
	
	void setCurentUser(HttpSession session, UserDTO user);
	
	Role_Facebook checkAccountFB(String token);
	
	User getUserByFBUID(String uid);
	
	User getUserById(int id);
	
	User findUserByTokenForgot(String token);
	
	void signUpToken(String token, String email, HttpSession session) throws UserNotFoundException;
	
}
