package com.littledroplets.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.littledroplets.Bean.Comment;
import com.littledroplets.mapper.CommentDao;
import com.littledroplets.mapper.CommentMapper;
import com.littledroplets.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {

	//Mybatis–¥∑®
//	@Autowired
//	private CommentMapper commentMapper;
//	
//	@Override
//	public void saveComment(Comment comment) {
//		commentMapper.saveComment(comment);
//	}
//
//	@Override
//	public Comment findOne(long commentId) {
//		return commentMapper.findOne(commentId);
//	}
//
//	@Override
//	public List<Comment> findByPhotoId(long photoId) {
//		return commentMapper.findByPhotoId(photoId);
//	}
	
	//SpringJPA–¥∑®
    @Autowired
    private CommentDao commentDao;

    public Comment save(Comment comment) {
        return commentDao.save(comment);
    }

    public Comment findOne (Long commentId) {
        return commentDao.findOne(commentId);
    }

    public List<Comment> findByPhotoId (Long photoId) {
        return commentDao.findByPhotoId(photoId);
    }
}
