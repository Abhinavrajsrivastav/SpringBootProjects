package com.example.findmovie.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.findmovie.Service.YTS;


@RestController
public class YTC {
    
    @Autowired
    private YTS yts;

    @PostMapping("/seeMovie")
    @CrossOrigin(origins = "*")
    public String generateYoutubeUrl(@RequestBody Map<String, String> movieName) {
        return yts.generateYoutubeUrl(movieName.get("movieName"));
    }
}


