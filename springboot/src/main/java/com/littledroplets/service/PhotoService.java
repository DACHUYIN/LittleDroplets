package com.littledroplets.service;

import java.util.List;

import com.littledroplets.Bean.Photo;
import com.littledroplets.Bean.User;

public interface PhotoService {

//	List<Photo> getAllPhotos();
//	
//	void savePhoto(Photo photo);
//	
//	List<Photo> findByUser(User user);
//	
//	Photo findByPhotoId(long photoId);
	
	Photo save(Photo photo);

    List<Photo> findAll();

    List<Photo> findByUser(User user);

    Photo findByPhotoId(Long photoId);
	
}
