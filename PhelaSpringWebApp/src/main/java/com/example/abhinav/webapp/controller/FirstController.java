package com.example.abhinav.webapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//to covert a class into a controller we use @RestController

@RestController
public class FirstController {

	@GetMapping()
	public String getHelloSpring() {
		//this is a API
		return "hello spring world";
}
	@GetMapping("Hello")
	public String getHello() {
		return "hello world";
	}
	
//	RequestParameter ---> @RequestPram
	@GetMapping("searching")
	public String searching(@RequestParam(name = "ab") String val) {
		return val;
	}
	
// RequestPath --> @PathVariable
	@GetMapping("searchingPath/{abhinav}")
	public String PathVar(@PathVariable(name = "abhinav") String val) {
		return val;
	}
	
	//localhost:8091/post
	@PostMapping(path = "post")
	public void postKaro() {
		System.out.println("Post is running");
	}
}
