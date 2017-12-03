package com.littledroplets.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.littledroplets.Bean.Photo;
import com.littledroplets.Bean.User;
import com.littledroplets.mapper.PhotoDao;
import com.littledroplets.mapper.PhotoMapper;
import com.littledroplets.service.PhotoService;

@Service
public class PhotoServiceImpl implements PhotoService {

	//Mybatis–¥∑®
//	@Autowired
//	private PhotoMapper photoMapper;
//	
//	@Override
//	public List<Photo> getAllPhotos() {
//		return photoMapper.getAllPhotos();
//	}
//
//	@Override
//	public void savePhoto(Photo photo) {
//	     photoMapper.savePhoto(photo);
//	}
//
//	@Override
//	public List<Photo> findByUser(User user) {
//		return photoMapper.findByUser(user);
//	}
//
//	@Override
//	public Photo findByPhotoId(long photoId) {
//		return photoMapper.findByPhotoId(photoId);
//	}
	
	//SpringJPA–¥∑®
    @Autowired
    private PhotoDao photoDao;

    public Photo save(Photo photo) {
        return photoDao.save(photo);
    }

    public List<Photo> findAll() {
        return photoDao.findAll();
    }

    public List<Photo> findByUser(User user) {
        return photoDao.findByUser(user);
    }

    public Photo findByPhotoId(Long photoId) {
        return photoDao.findByPhotoId(photoId);
    }
}
