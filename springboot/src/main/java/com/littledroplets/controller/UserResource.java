package com.littledroplets.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.littledroplets.Bean.User;
import com.littledroplets.service.UserService;

@RestController
@RequestMapping("/rest")
public class UserResource {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/user/users", method = RequestMethod.GET)
	public List<User> findAllUsers() {
		return userService.findAllUsers();
	}
	
	@RequestMapping(value="/user/userName", method = RequestMethod.POST)
	public User findByUserName(@RequestBody String userName) {
		return userService.findByUserName(userName);
	}
	
	@RequestMapping(value="/user/update", method = RequestMethod.POST)
	public User updateUser(@RequestBody User user) {
		return user;
	}
}
