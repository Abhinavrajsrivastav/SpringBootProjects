package com.example.findmovie.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.findmovie.Model.Movie;

public interface MovieRepo extends JpaRepository<Movie, Integer>{
    
}
