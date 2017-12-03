package com.littledroplets.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.littledroplets.Bean.Photo;
import com.littledroplets.service.PhotoService;

@RestController
@RequestMapping("/photo")
public class PhotoController {

	@Autowired
	private PhotoService photoService;

	// @RequestMapping("/allPhotos")
	// public List<Photo> getAllPhotos() {
	// return photoService.getAllPhotos();
	// }
	@RequestMapping(value = "/allPhotos", method = RequestMethod.GET)
	public List<Photo> getAllPhotos() {
		return photoService.findAll();
	}
}
