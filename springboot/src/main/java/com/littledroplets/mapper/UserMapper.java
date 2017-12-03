package com.littledroplets.mapper;

import java.util.List;

import com.littledroplets.Bean.User;

public interface UserMapper {
	
	void saveUser(User user);
	
	User findByUserName(String userName);
	
	List<User> findAllUsers();
}
