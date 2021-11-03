package com.fptsofware.mockproject.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fptsofware.mockproject.entity.Role_Facebook;
import com.fptsofware.mockproject.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	User findByUsername(String username);
	
    public User findById(int id);

    Boolean existsByUsername(String username);
    
    Optional<User> findUserByUsername(String username); 
    
    public User findByTokenForgot(String token);
    
}
