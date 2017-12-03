package com.littledroplets.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.littledroplets.Bean.User;
import com.littledroplets.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@RequestBody Map<String, String> json) throws ServletException {
		if(json.get("username") == null || json.get("password") == null) {
			throw new ServletException("Please fill in username and password");
		}
		
		String userName = json.get("username");
		String passwor = json.get("password");
		
		User user = userService.findByUserName(userName);
		if(user == null) {
			throw new ServletException("User name not found");
		}
		
		String pwd = user.getPassword();
		if(!passwor.equals(pwd)) {
			throw new ServletException("Invalid login. Please check your username and password");
		}
		
		String token = Jwts.builder().setSubject(userName).claim("roles", "user").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "secretKey").compact();
		
		return token;
	}
	
//	@RequestMapping(value="/register", method = RequestMethod.POST)
//	public void registerUser(@RequestBody User user) {
//		 userService.saveUser(user);
//	}
	@RequestMapping(value="/register", method = RequestMethod.POST)
	public User registerUser(@RequestBody User user) {
		return userService.save(user);
	}
}
