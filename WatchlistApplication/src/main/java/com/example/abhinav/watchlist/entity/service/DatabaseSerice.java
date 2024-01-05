package com.example.abhinav.watchlist.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.abhinav.watchlist.entity.Movie;
import com.example.abhinav.watchlist.entity.repository.MovieRepo;

@Service
public class DatabaseSerice {

	@Autowired
	MovieRepo movieRepo;

	@Autowired
	RatingService ratingService;
	
	//create a create method which will save the data in database
	public void create(Movie movie) {
		// TODO Auto-generated method stub

		//1. get the rating from the rating service
		String rating = ratingService.getMovieRating(movie.getTitle());
		//2. set the rating in the movie object
		if (!rating.isEmpty()) {
        // 3. set the rating in the movie object and save
		float rate = Float.parseFloat(rating);
		if(rate>=5.0&&rate<6.0) {
           movie.setPriority("M");
    }
	else if(rate<5.0&&rate>0.0) {
           movie.setPriority("L");
    }
	else {
		   movie.setPriority("H");
	}
	 movie.setRating(Float.parseFloat(rating));
     movieRepo.save(movie);
	}
}
	
	public List<Movie> getAllMovies() {
		// TODO Auto-generated method stub
          return movieRepo.findAll();
	}
	
	public Movie getMovieById(Integer id) {
		// TODO Auto-generated method stub
      return movieRepo.findById(id).get();
		
	}

	public void update(Movie movie, Integer id) {
		// TODO Auto-generated method stub
		movieRepo.save(movie);
	}
}
