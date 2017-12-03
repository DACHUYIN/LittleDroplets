package com.littledroplets.service;

import java.util.List;
import com.littledroplets.Bean.User;

public interface UserService {
	
//	void saveUser(User user);
//	
//	User findByUserName(String userName);
//	
//	List<User> findAllUsers();
	
	List<User> findAllUsers();
	
	User findByUserName(String userName);
	
	User save(User user);
}
