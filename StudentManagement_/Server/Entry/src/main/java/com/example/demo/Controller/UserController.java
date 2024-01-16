package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Exception.UserNotFoundException;
import com.example.demo.Model.User;
import com.example.demo.Repository.UserRepository;

//==> Api exposer. It is used to expose the api to the client
@RestController
//==> @CrossOrigin(origins = "http://localhost:3000") is used to allow other origin to access resource
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    
    //==> @Autowired is used to inject the dependency
    @Autowired
    private UserRepository userRepository;


    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUser(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }

    //==> @PutMapping is used to update the resource
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id).map(user->{
            user.setName(newUser.getName());
            user.setUsername(newUser.getUsername());
            user.setEmail(newUser.getEmail());
            return userRepository.save(user);
        }).orElseGet(()->{
            newUser.setId(id);
            return userRepository.save(newUser);
        });
    }

    //==> @DeleteMapping is used to delete the resource
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id))
            throw new UserNotFoundException(id);
        userRepository.deleteById(id);
        return "User with id "+id+" deleted successfully";
    }
          
}
