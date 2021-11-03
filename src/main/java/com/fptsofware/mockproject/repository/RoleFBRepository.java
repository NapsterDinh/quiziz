package com.fptsofware.mockproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fptsofware.mockproject.entity.Role_Facebook;

public interface RoleFBRepository extends JpaRepository<Role_Facebook, Integer> {
	Role_Facebook findByToken(String token);
	
	Role_Facebook findByUid(String uid);
}
