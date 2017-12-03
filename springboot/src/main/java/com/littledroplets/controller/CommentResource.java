package com.littledroplets.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.littledroplets.Bean.Comment;
import com.littledroplets.Bean.Photo;
import com.littledroplets.service.CommentService;
import com.littledroplets.service.PhotoService;

@RestController
@RequestMapping("/rest")
public class CommentResource {

	@Autowired
	private PhotoService photoService;
	
	@Autowired
	private CommentService commentService;
	
//	@RequestMapping(value = "/comment/add", method = RequestMethod.POST)
//	public void addComment(@RequestBody Comment comment) {
//		Photo photo = photoService.findByPhotoId(comment.getPhotoId());
//		List<Comment> commentList = photo.getCommentList();
//		comment.setPhoto(photo);
//		commentService.saveComment(comment);
//	}
	@RequestMapping(value = "/comment/add", method = RequestMethod.POST)
	public void addComment (@RequestBody Comment comment) {
		Photo photo = photoService.findByPhotoId(comment.getPhotoId());
		List<Comment> commentList = photo.getCommentList();
		comment.setPhoto(photo);
		commentService.save(comment);
	}
}
