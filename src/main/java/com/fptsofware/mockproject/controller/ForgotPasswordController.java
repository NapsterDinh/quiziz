package com.fptsofware.mockproject.controller;

import java.io.UnsupportedEncodingException;
import java.security.Principal;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.fptsofware.mockproject.entity.User;
import com.fptsofware.mockproject.exception.UserNotFoundException;
import com.fptsofware.mockproject.service.UserService;
import com.fptsofware.mockproject.utils.Utitily;

import net.bytebuddy.utility.RandomString;

@Controller
public class ForgotPasswordController {

	@Autowired
	private UserService userService;

	@Autowired
	private JavaMailSender mailSender;

	@GetMapping("/forgot_password")
	public String showForgotPasswordForm() {
	    return "forgotPassword";
	}
	@PostMapping("/forgot_password")
	public String processForgotPassword(HttpServletRequest request, Model model) {
		String email = request.getParameter("email");
		String token = RandomString.make(30);

		try {
			userService.updateResetPasswordToken(token, email);
			String resetPasswordLink = Utitily.getSiteURL(request) + "/reset_password?token=" + token;

			sendEmail(email, resetPasswordLink);
			model.addAttribute("message", "We have sent a reset password link to your email. Please check.");

		} catch (UserNotFoundException ex) {
			model.addAttribute("error", ex.getMessage());
		} catch (UnsupportedEncodingException | MessagingException e) {
			model.addAttribute("error", "Error while sending email");
		}

		return "forgotPassword";
	}

	private void sendEmail(String recipientEmail, String link) throws MessagingException, UnsupportedEncodingException {
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		helper.setFrom("contact@mock.com", "Mock Support");
		helper.setTo(recipientEmail);

		String subject = "Here's the link to reset your password";

		String content = "   \r\n"
				+ "    <div class=\"content\"\r\n"
				+ "        style=\"font-family:'OpenSans','Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;max-width:600px;display:block;margin:0 auto\">\r\n"
				+ "        <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\"\r\n"
				+ "            style=\"font-family:'OpenSans','Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0\">\r\n"
				+ "            <tbody>\r\n"
				+ "                <tr style=\"background-color:#fff\">\r\n"
				+ "                    <td><img src=\"https://ci4.googleusercontent.com/proxy/QS9hZTpMa8068ApB7XWDhw19fs1tcaW2op-SL8tDmXagIJAeA-nlv6I3WCclSU-wDYYrEPRJnWl_xl-jY2T4vJKi9dd0nd96f1nLldXRWuGR52kAdJ_SIS1f5qVZFb54yXRMD39bD1TzUQ0n4PbfRnNsbhhiqWsKY_lmBVdw9XD6p3lg0-PwRyv6wL_Y0YxF0V1DbPvIE4djqNbuVwMuS6gJ_ZFIOc2HRi092HZ3uLSCHRyD6IYIF2NdcaT82TlO_JZ86rG3QXyiKubSaKWalGS9Rgj-lviQu8F0DiTdaKokITke6TXo3MmhbNanDm-3xlwp9f3nH2YqlZPmQHzVo2PoaGbIx5RnNicH7zOhV5KvplFK_qeF8RIMj_h5YoHEX7RvD9qfsjeZfA6VdrKQs4pEWPvgmvGD_xlr0FrNWri55O0UFZ7nw5Z5AU_sreyqFiQb24gTxWdWQzByfxo=s0-d-e1-ft#http://img.mail.quizizz.com/im/1468115/9e7ce4bd85a9be5f9e3c881705d6a69d89850268f3bed75677c967f58a1dea81.png?e=yIPuMAGdLUSA1K2c5phK1acYmc2U1ef7Ga1DjfP81xq1r5JIhQkwAM20OhQRCy6AJMeEJMT5xUdh-YS5CmQl0j5aTYICivKpK41wh6Oz32am9J6_jLisE4T81ugsXhZtNVPaiGPhLkvcW_PPy7WioYSjUXP_O3sIt82qk4-OUx9O4XJbcOWQp4ywj7eYSJBb0aT1GiH87wVJA8XtzXUbvikgqVmb\"\r\n"
				+ "                            alt=\"Quizizz\" class=\"CToWUd\"><br></td>\r\n"
				+ "                </tr>\r\n"
				+ "                <tr\r\n"
				+ "                    style=\"font-family:'OpenSans','Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0;background-color:#fff;max-width:600px\">\r\n"
				+ "                    <td class=\"content-wrap\"\r\n"
				+ "                        style=\"font-family:'OpenSans','Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:20px\"\r\n"
				+ "                        valign=\"top\">\r\n"
				+ "                        <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\"\r\n"
				+ "                            style=\"font-family:'OpenSans','Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0\">\r\n"
				+ "                            <tbody>\r\n"
				+ "                                <tr\r\n"
				+ "                                    style=\"font-family:'OpenSans','Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0\">\r\n"
				+ "                                    <td style=\"font-family:'OpenSans','Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px\"\r\n"
				+ "                                        valign=\"top\">Hello,<br><br>We received a password reset request for your\r\n"
				+ "                                        account. To update your password, please click below. <br><br>If you didn’t make\r\n"
				+ "                                        this request, please ignore this email.</td>\r\n"
				+ "                                </tr>\r\n"
				+ "                                <tr\r\n"
				+ "                                    style=\"font-family:'OpenSans','Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0\">\r\n"
				+ "                                    <td style=\"font-family:'OpenSans','Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px\"\r\n"
				+ "                                        valign=\"top\">\r\n"
				+ "                                        <center><a\r\n"
				+ "                                                href=\""+ link +"\" " + "style=\"font-family:'OpenSans','Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:16px;color:#fff;text-decoration:none;line-height:2em;font-weight:bold;text-align:center;display:inline-block;border-radius:5px;text-transform:capitalize;background-color:#7d72ec;margin:0;border-color:#7d72ec;border-style:solid;border-width:10px 20px\"\r\n"
				+ "                                                target=\"_blank\"\r\n"
				+ "                                                >Update\r\n"
				+ "                                                Password</a></center>\r\n"
				+ "                                    </td>\r\n"
				+ "                                </tr>\r\n"
				+ "                                <tr\r\n"
				+ "                                    style=\"font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0;color:#6b7c93\">\r\n"
				+ "                                    <td style=\"font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:13px;vertical-align:top;margin:0;padding:0 0 20px\"\r\n"
				+ "                                        valign=\"top\"><span style=\"max-width:750px\">If you can't click the link above,\r\n"
				+ "                                            please paste this link into your browser <a\r\n"
				+ "                                               href=\""+ link +"\" " +  "style=\"word-break:break-all;color:#6b7c93\" target=\"_blank\"\r\n"
				+ "                                                >here.</a></span>\r\n"
				+ "                                    </td>\r\n"
				+ "                                </tr>\r\n"
				+ "                            </tbody>\r\n"
				+ "                        </table>\r\n"
				+ "                    </td>\r\n"
				+ "                </tr>\r\n"
				+ "                <tr\r\n"
				+ "                    style=\"font-family:'OpenSans','Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0\">\r\n"
				+ "                    <td style=\"text-align:center;color:#6b7c93;padding-bottom:16px\"><br>\r\n"
				+ "                        <p>Quizizz</p>\r\n"
				+ "                        <p>Số 1, đường Võ Văn Ngân, Tp. Thủ Đức, Tp. Hồ Chí Minh</p>\r\n"
				+ "                        <p></p>\r\n"
				+ "                    </td>\r\n"
				+ "                </tr>\r\n"
				+ "            </tbody>\r\n"
				+ "        </table>\r\n"
				+ "    </div>";

		helper.setSubject(subject);

		helper.setText(content, true);

		mailSender.send(message);
	}
	
	@GetMapping("/reset_password")
	public String showResetPasswordForm(@Param(value = "token") String token, Model model) {
		User user = userService.findUserByTokenForgot(token);
	    model.addAttribute("token", token);
	     
	    if (user == null) {
	        model.addAttribute("message", "Invalid Token");
	        return "message_reset_password";
	    }
	     
	    return "reset_password_form";
	}
	@PostMapping("/reset_password")
	public String processResetPassword(HttpServletRequest request, Model model) {
	    String token = request.getParameter("token");
	    String password = request.getParameter("password");
	     
	    User user = userService.findUserByTokenForgot(token);
	    
	    
	    model.addAttribute("title", "Reset your password");
	     
	    if (user == null) {
	    	
	        model.addAttribute("message", "Invalid Token");
	        return "message_reset_password";
	    } else {           
	    	
	        userService.updatePasswordbyToken(user, password);
	         
	        model.addAttribute("message", "You have successfully changed your password.");
	    }
	     
	    return "message_reset_password";
	}
	
	
	@PostMapping("/update_password")
	public String updatePassword(HttpServletRequest request, Model model, @AuthenticationPrincipal OAuth2User principal, 
			Authentication authentication, Principal norprincipal) {
		String email="";
		if(principal!=null) {
			email = principal.getAttribute("email");
		}
		else {
			email = norprincipal.getName();
		}
		String token = RandomString.make(30);

		try {
			userService.updateResetPasswordToken(token, email);
			String resetPasswordLink = Utitily.getSiteURL(request) + "/reset_password?token=" + token;

			sendEmail(email, resetPasswordLink);
			User user = userService.getUserByUsername(email);
			model.addAttribute("user", user);
			model.addAttribute("message","We have sent a reset password link to your email. Please check.");
		} catch (UserNotFoundException ex) {
			//model.addAttribute("error", ex.getMessage());
		} catch (UnsupportedEncodingException | MessagingException e) {
			//model.addAttribute("error", "Error while sending email");
		}

		return "setting_user";
	}
}