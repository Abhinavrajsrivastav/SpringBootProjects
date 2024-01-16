package com.example.demo.Exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("Could not found user with the id " + id);
    }
}
