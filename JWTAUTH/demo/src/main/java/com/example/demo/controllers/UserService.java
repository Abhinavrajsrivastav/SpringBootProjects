package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.Model.User;

@Service
public class UserService {
     private List<User>  store = new ArrayList<>();
     
     public UserService(){
          store.add(new User(UUID.randomUUID().toString(),"Abhinav","abhinav@gmail.com"));
          store.add(new User(UUID.randomUUID().toString(),"Archit","archit@gmail.com"));
          store.add(new User(UUID.randomUUID().toString(),"Ankit","ankit@gmail.com"));
          store.add(new User(UUID.randomUUID().toString(),"Anuj","anuj@gmail.com"));
     }

     public List<User> getAllUsers(){
          return store;
     }
}
