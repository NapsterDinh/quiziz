package com.fptsofware.mockproject.service;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fptsofware.mockproject.entity.Role_Facebook;
import com.fptsofware.mockproject.entity.Role_Google;
import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.exception.UserNotFoundException;
import com.fptsofware.mockproject.model.UserDTO;
import com.fptsofware.mockproject.model.UserDTOFB;
import com.fptsofware.mockproject.repository.RoleFBRepository;
import com.fptsofware.mockproject.repository.Role_GoogleRepository;
import com.fptsofware.mockproject.repository.UserRepository;
import com.fptsofware.mockproject.utils.MD5;

@Service
@Transactional
public class UserService implements IUserService,UserDetailsService {

	private static final String SESSION_KEY_CURRENT_USER = "currentUser";

	public static final String SESSION_KEY_SIGNUP_TOKEN = "tokenSignUp";
	@Autowired
	private Role_GoogleRepository role_GoogleRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleFBRepository fbRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder; 
	
	@Autowired
	private MD5 md5;

	@Override
	public User checklogin(String username, String password) {
		User user = userRepository.findByUsername(username);
		// Hash mk vừa nhập bằng MD5
		String encodedPassword = MD5.HashMD5(password);
		// Kiểm tra username password với DB
		if (user != null && user.getUsername().equals(username) && user.getPassword().equals(encodedPassword)) {
			return user;
		} else {
			return null;
		}
	}

	@Override
	public String loadImage(String username) {
		// Tìm hình ảnh tương ứng với username
		User user = userRepository.findByUsername(username);
		if (user != null) {
			return user.getImage();
		} else {
			return "";
		}
	}
	
	@Override
	public User getUserByFBUID(String uid) {
		Role_Facebook rolefb = fbRepository.findByUid(uid);
		User user = userRepository.getById(rolefb.getId());

		user.setRole_fb(rolefb);
		return user;
	}

	// Kiểm tra id ở field token trong DB xem đã tồn tại chưa
	// **LƯU Ý: Trong quá trình làm bài mình nhận thấy Token hết hạn liên tục cách
	// vài tiếng 1 lần nên để tiện trong việc lưu DB thì mình đã lưu id thay cho
	// token
	@Override
	public Role_Facebook checkAccountFB(String token) {
		return fbRepository.findByToken(token);

	}
	
	@Override
	public void setCurentUser(HttpSession session, UserDTO user) {
		session.setAttribute(SESSION_KEY_CURRENT_USER, user);
	}
	
	@Override
	public void setCurentUserFB(HttpSession session, UserDTOFB userdtofb) {
		session.setAttribute(SESSION_KEY_CURRENT_USER, userdtofb);
	}

	@Override
	public void removeCurrentUser(HttpSession session) {
		session.removeAttribute(SESSION_KEY_CURRENT_USER);
	}
	
	@Override
	// Forgot Password
	public void updateResetPasswordToken(String token, String email) throws UserNotFoundException {

		User user = userRepository.findByUsername(email);

		if (user != null) {

			user.setTokenForgot(token);

			userRepository.save(user);
		} else {
			throw new UserNotFoundException("Could not find any user with the email " + email);
		}

	}
	@Override
	public void signUpToken(String token, String email, HttpSession session) throws UserNotFoundException {

		
		User user = userRepository.findByUsername(email);

		if (user == null) {
			System.out.print("token:"+ token);
			session.setAttribute(SESSION_KEY_SIGNUP_TOKEN, token);
			
		} else {
			throw new UserNotFoundException(email+ " is already registered");
		}

	}
	
	@Override
	public Role_Google getByResetPasswordToken(String token) {
		return role_GoogleRepository.findByToken(token);
	}
	
	@Override
	public void updatePasswordbyToken(User user, String newPassword) {

		user.setPassword(md5.HashMD5(newPassword));
		user.setTokenForgot(null);

		userRepository.save(user);
	}

	// Setting
	@Override
	public User getByIdUser(int id) {
		return userRepository.getById(id);
	}

	@Override
	public void updateUsername(User user, String username) throws UserNotFoundException {

		if (userRepository.existsByUsername(username)) {
			throw new UserNotFoundException("Username not available");
		} else {
			user.setUsername(username);
			userRepository.save(user);
		}
	}

	@Override
	public void updateBirthday(User user, Date birthday) throws UserNotFoundException {

		long millis = System.currentTimeMillis();
		Date date = new Date(millis);
		if (!(birthday.after(Date.valueOf("1990-1-1")) && birthday.before(date))) {
			throw new UserNotFoundException("Birthday not available");
		} else {
			user.setDateOfBirth(birthday);
			userRepository.save(user);
		}
	}

	@Override
	public void updateImage(User user, String image) throws UserNotFoundException {

		user.setImage(image);

		userRepository.save(user);

	}

	@Override
	public void updatePassword(User user, String newPassword) throws UserNotFoundException {

		if (newPassword.length() < 6) {
			throw new UserNotFoundException("Password not available (Password length must be 6 or more)");
		} else {
			user.setPassword(newPassword);

			userRepository.save(user);
		}
	}

	@Override
//		kiểm tra username tồn tại? nếu có trả về true và ngược lại
	public boolean checkUserNameExisted(UserDTO userDto) {
		User user = userRepository.findByUsername(userDto.getUsername());
		if (user != null) {
			return true;
		}
		return false;
	}

	@Override
	public User save(UserDTO userDto) throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd");
		 java.sql.Date sql;
		if(userDto.getDateOfBirth() != null)
		{
			Date parsed = (Date) format.parse(userDto.getDateOfBirth());
			sql = new java.sql.Date(parsed.getTime());
		}
		else
		{
			java.util.Date parsed = format.parse("9999/12/31");
			sql = new java.sql.Date(parsed.getTime());
		}

		User user = new User(userDto.getUsername(), userDto.getName(), userDto.getEmail(),
				(md5.HashMD5(userDto.getPassword())),sql , userDto.getImage(), userDto.getRole_fb(),
				userDto.getRole_gg());
		return userRepository.save(user);
	}
	
	@Override
//		lấy user by username
	public User getUserByUsername(String username) {
		User user = userRepository.findByUsername(username);
		if (user != null) {
			return user;
		}
		return null;
	}

	// tạo user mới sau khi sign in bằng google hoặc facebook
	@Override
	public void createNewUserAfterOAuthLoginSuccess(String email, String name, Map<String, Object> token,
			String clientName) {
		
		User user;
		// google signin
		if (clientName.equals("Google")) {
			Role_Google roelgg = new Role_Google(name, token.values().toString());

			user = new User(email, name, email, null, null, null, null,
					roelgg);

		}
		// facebook sigin
		else {
			Role_Facebook rolefb = new Role_Facebook(name, token.values().toString());

			user = new User(email, name, email, null, null, null,
					rolefb, null);
		}
		userRepository.save(user);
	}

	// cập nhật user đã tồn tại sau khi sign in bằng google hoặc facebook
	@Override
	public void updateNewUserAfterOAuthLoginSuccess(User user, Map<String, Object> token, String clientName) {
		// google signin
		if (clientName.equals("Google")) {
			user.setRole_gg(new Role_Google(user.getName(), token.values().toString()));
			userRepository.save(user);
		}
		// facebook sigin
		else {
			user.setRole_fb(new Role_Facebook(user.getName(), token.values().toString()));
			userRepository.save(user);
		}
	}

	@Override 
	public UserDetails loadUserByUsername(String username) 
	   throws UsernameNotFoundException { 
	      User user = userRepository.findUserByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not present")); 
	         return user; 
	 } 
	
	@Override 
	public void createUser(UserDetails user) { 
	      userRepository.save((User) user); 
	}

	@Override
	public User getUserById(int id) {
		return userRepository.findById(id);
	}

	@Override
	public User findUserByTokenForgot(String token) {
		// TODO Auto-generated method stub
		return userRepository.findByTokenForgot(token);
	}

	@Override
	public void updateName(User user, String name) throws UserNotFoundException {
		// TODO Auto-generated method stub
		user.setName(name);
		userRepository.save(user);
	}
	
	

}
