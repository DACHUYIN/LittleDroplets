package com.littledroplets.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.littledroplets.Bean.User;
import com.littledroplets.mapper.UserDao;
import com.littledroplets.mapper.UserMapper;
import com.littledroplets.service.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	//Mybatis–¥∑®
//	@Autowired
//	private UserMapper userMapper;
//
//	@Override
//	public void saveUser(User user) {
//		userMapper.saveUser(user);
//	}
//
//	@Override
//	public User findByUserName(String userName) {
//		return userMapper.findByUserName(userName);
//	}
//
//	@Override
//	public List<User> findAllUsers() {
//		return userMapper.findAllUsers();
//	}
	
	//SpringJPA–¥∑®
	@Autowired
	private UserDao userDao;
	
	@Override
	public List<User> findAllUsers() {
		
		return userDao.findAll();
	}

	@Override
	public User findByUserName(String userName) {
		return userDao.findByUserName(userName);
	}

	@Override
	public User save(User user) {
		return userDao.save(user);
	}
}
