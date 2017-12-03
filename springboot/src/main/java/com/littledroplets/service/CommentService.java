package com.littledroplets.service;

import java.util.List;

import com.littledroplets.Bean.Comment;

public interface CommentService {
	
//	void saveComment(Comment comment);
//	
//	Comment findOne(long commentId);
//	
//	List<Comment> findByPhotoId(long photoId);
	
	Comment save(Comment comment);

    List<Comment> findByPhotoId (Long photoId);

    Comment findOne(Long commentId);
}
