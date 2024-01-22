package com.example.demo.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class ChatGPTRequest {
    
    //model of chat gpt
    private String model;
    //prompt
    private List<Message> messages;

    public ChatGPTRequest(String model, String prompt) {
        this.model = model;
        this.messages = new ArrayList<>();
        this.messages.add(new Message("user", prompt));
    }
}
