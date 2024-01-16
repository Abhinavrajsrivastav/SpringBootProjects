package com.example.demo.Exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

//==> @ControllerAdvice is used to handle the exception globally
@ControllerAdvice
public class UserNotFoundAdvise {
         
        @ResponseBody
        @ExceptionHandler(UserNotFoundException.class)
        @ResponseStatus(HttpStatus.NOT_FOUND)
        public Map<String,String> exceptionHandler(UserNotFoundException exception){
                            Map<String,String> map = new HashMap();
                                map.put("message", exception.getMessage());
                                return map;
        }
}
