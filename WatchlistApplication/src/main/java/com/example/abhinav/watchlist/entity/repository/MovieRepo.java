package com.example.abhinav.watchlist.entity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.abhinav.watchlist.entity.Movie;

@Repository
public interface MovieRepo extends JpaRepository<Movie,Integer> {

}
