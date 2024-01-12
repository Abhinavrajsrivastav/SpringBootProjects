package com.example.findmovie.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.example.findmovie.Model.Movie;
import com.example.findmovie.Repo.MovieRepo;
import com.fasterxml.jackson.databind.node.ObjectNode;

import aj.org.objectweb.asm.TypeReference;

@Repository
public class MovieService {

    private final String api = "https://www.omdbapi.com/?i=tt3896198&apikey=44cdfdd3&s=";

    public List searchMovie(String title) {
        // import other necessary import
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<ObjectNode> response = restTemplate.getForEntity(api + title, ObjectNode.class);
        ObjectNode json = response.getBody();
        int length = json.get("Search").size();
        List<Object> list = new ArrayList<>();
        for(int i = 0;i<length;i++){
             list.add(json.get("Search").get(i));
        }
        return list;
    }
}
