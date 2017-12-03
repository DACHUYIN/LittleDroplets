package com.littledroplets.mapper;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.littledroplets.Bean.User;

@Repository
public interface UserDao extends CrudRepository<User, Long> {
	List<User> findAll();
	
	User findByUserName(String userName);
	
	User findByUserId(Long userId);
	
	User save(User user);
}
