package com.example.abhinav.watchlist.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.example.abhinav.watchlist.entity.Movie;
import com.example.abhinav.watchlist.entity.service.DatabaseSerice;

import jakarta.validation.Valid;

@RestController
public class MovieController {
	
	@Autowired
	DatabaseSerice databaseService;	

	@GetMapping("/watchlistItemForm")
	public ModelAndView showWatchListForm(@RequestParam(required = false) Integer id) {
		String viewName = "watchlistItemForm";
		Map<String,Object> model = new HashMap<>();
		
		if(id==null) {
			model.put("watchlistItem",new Movie());
		}
		else {
			model.put("watchlistItem",databaseService.getMovieById(id));
		}
		
		return new ModelAndView(viewName,model);
	}
	
	@PostMapping("/watchlistItemForm")
	public ModelAndView submitWatchListForm(@Valid @ModelAttribute("watchlistItem") Movie movie, BindingResult bindingResult) {

		if(bindingResult.hasErrors()) {
			//if there are validation errors, show the form again
			String viewName = "watchlistItemForm";
			Map<String,Object> model = new HashMap<>();
			model.put("watchlistItem",movie);
			return new ModelAndView(viewName,model);
		}

		databaseService.create(movie);
		
		RedirectView rd = new RedirectView();
		rd.setUrl("watchlist");
		
		return new ModelAndView(rd);
	}
	
	@GetMapping("/watchlist")
	public ModelAndView getWatchList() {
		// TODO Auto-generated method stub
		String viewName = "watchlist";
		Map<String, Object> model = new HashMap<>();
		List<Movie> movieList = databaseService.getAllMovies();
		model.put("watchlistrows", movieList);
		model.put("noofmovies", movieList.size());
		return new ModelAndView(viewName, model);
	}
}
