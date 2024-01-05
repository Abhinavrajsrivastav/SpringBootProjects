package com.example.abhinav.watchlist.entity.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.example.abhinav.watchlist.entity.Movie;
import com.fasterxml.jackson.databind.node.ObjectNode;

@Service
public class RatingService {
    String apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=44cdfdd3";



    public String getMovieRating(String title) {
        try{
            //try to fetch the rating from the API
            RestTemplate template = new RestTemplate();
            //1. api + title will call
            //2. api return a json type of object

            //3. calling the api and storing the response in a variable
            ResponseEntity<ObjectNode> response = template.getForEntity(apiUrl + "&t=" + title, ObjectNode.class);
            // System.out.println(response);

            
            //4. getting the json object or json body from the response
            ObjectNode json = response.getBody();

            //5. getting the rating from the json object
            System.out.println("before rating");
            String rating = json.path("imdbRating").asText();
            System.out.println(rating.length()+"rating is ");
            //6. returning the rating
            return rating;
        } catch (Exception e) {
            //then user entered rating will be entered
            System.out.println("either movie is not available or api is down" + e.getMessage());
            return null;
        }
    }
}
