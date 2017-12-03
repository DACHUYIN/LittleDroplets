package com.littledroplets.mapper;

import java.util.List;

import com.littledroplets.Bean.Comment;

public interface CommentMapper {

	void saveComment(Comment comment);
	
	Comment findOne(long commentId);
	
	List<Comment> findByPhotoId(long photoId);
}
