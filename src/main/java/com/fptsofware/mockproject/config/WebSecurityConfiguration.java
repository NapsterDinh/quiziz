package com.fptsofware.mockproject.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.fptsofware.mockproject.security.oauth.AuthProvider;
import com.fptsofware.mockproject.security.oauth.CustomOAuth2UserService;
import com.fptsofware.mockproject.security.oauth.OAuth2LoginSuccessHandler;
import com.fptsofware.mockproject.service.UserService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	private CustomOAuth2UserService oAuth2UserService;

	@Autowired
	private OAuth2LoginSuccessHandler oAuth2LoginSuccessHandler;
	
	@Autowired
	private AuthProvider authProvider;
	

	@Bean 
	public PasswordEncoder passwordEncoder() { 
	      return new BCryptPasswordEncoder(); 
	}
	
	@Bean
    public UserDetailsService userDetailsServices() {
        return new UserService();
    }
	
	@Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsServices());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }
	@Override
    protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authProvider);
    }
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		
		// C??c trang kh??ng y??u c???u login
		http.authorizeRequests()
			.antMatchers("/oauth2/**", "/home", "/","/login**", "/welcome","/assets/css/**","/assets/js/**","/assets/image/**","/webjars/**", "/error**","/login_action**")
			.permitAll()
			.and()
			.oauth2Login()
//			.defaultSuccessUrl("/oath2success", true)
			.loginPage("/")
			.userInfoEndpoint()
			.userService(oAuth2UserService)
			.and()
			.successHandler(oAuth2LoginSuccessHandler);
		
		
		// Khi ng?????i d??ng ???? login, v???i vai tr?? XX.
		 // Nh??ng truy c???p v??o trang y??u c???u vai tr?? YY, // Ngo???i l???
		 //AccessDeniedException s??? n??m ra.
		 http.authorizeRequests().and().exceptionHandling().accessDeniedPage("/403");
		 
		 
		http.authorizeRequests()
        .antMatchers(
            "/activity**", "/quiz/**","/start/**", "/quizEditor/getQuiz**", "/setting", "/setting/updateImage", "/quiz/**")
        .authenticated();
		
		
		http.formLogin()
	      .loginPage("/welcome")
	      .usernameParameter("username")
		  .passwordParameter("password")
	      .loginProcessingUrl("/perform_login")
	      .defaultSuccessUrl("/welcome", false)
	      .failureUrl("/login?error=true")
	      .and()
	      .logout()
	      .logoutUrl("/perform_logout")
	      .logoutSuccessUrl("/welcome")
	      .deleteCookies("JSESSIONID")
	      .invalidateHttpSession(true);
		
		
		
//		// C???u h??nh Remember Me.
//		http.authorizeRequests().and() //
//					.rememberMe().tokenRepository(this.persistentTokenRepository()) //
//					.tokenValiditySeconds(1 * 24 * 60 * 60); // 24h

	}

}

