package com.fptsofware.mockproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fptsofware.mockproject.entity.Role_Google;


public interface Role_GoogleRepository extends JpaRepository<Role_Google, Long> {
	
	 public Role_Google findById(int id);
	 
	 public Role_Google findByName(String name);
	 
	 public Role_Google findByToken(String token);

}