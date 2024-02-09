package com.example.findmovie.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.findmovie.Model.Movie;
import com.example.findmovie.Service.MovieService;

@RestController
@CrossOrigin(origins = "*")
public class MovieController {

    @Autowired
    MovieService movieService;

    private List storedMovies;

    @PostMapping("/")
    public List searchMovie(@RequestBody Movie movie){
        try{
            storedMovies = movieService.searchMovie(movie.getTitle());
            return storedMovies;
        }
        catch (Exception e){
            return null;
        }
    }

    @GetMapping("/Movies")
    public List getMovies(){
        return storedMovies;
    }

    @PostMapping("/hello")
    public String Hell(){
        return "Hello";
    }
}
