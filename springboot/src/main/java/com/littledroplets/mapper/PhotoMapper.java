package com.littledroplets.mapper;

import java.util.List;

import com.littledroplets.Bean.Photo;
import com.littledroplets.Bean.User;

public interface PhotoMapper {

	List<Photo> getAllPhotos();
	
	void savePhoto(Photo photo);
	
	List<Photo> findByUser(User user);
	
	Photo findByPhotoId(long photoId);
}
