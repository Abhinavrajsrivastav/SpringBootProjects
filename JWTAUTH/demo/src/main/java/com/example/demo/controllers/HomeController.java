package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Model.User;

@RestController
@RequestMapping("/home")
public class HomeController {
    

    @Autowired
    private UserService userService;

    //http://localhost:9089/home/user
    @GetMapping("/user")
    public List<User> getUser() {
        System.out.println("Hello World");
        return this.userService.getAllUsers();
    }
    
}
