package com.example.abhinav.whether.Controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.example.abhinav.whether.Entity.Whether;
import com.example.abhinav.whether.Entity.Service.SeeService;
import com.example.abhinav.whether.Entity.Service.WhetherService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class WheterController {
  
    @Autowired
    SeeService seeService;

    @GetMapping("/wheteherApp")
    public ModelAndView sendModelAndView() {
        String view = "wheteherApp";
        Map<String, Object> model = new HashMap<>();
        Whether whether = new Whether();
        model.put("whetherObject", whether);
        return new ModelAndView(view, model);
    }
    
    @PostMapping("/wheteherApp")
    public ModelAndView processForm(@ModelAttribute("whetherObject") Whether whether) {
        try {
            // Handle the form submission here
            String[] data = seeService.getWhether(whether.getName());
            Map<String, Object> model = new HashMap<>();
            model.put("data", data);
            return new ModelAndView("resultPage", model);
        } 
        catch (Exception e) {
            e.printStackTrace();
            return new ModelAndView("errorPage", "errorMessage", "Error getting weather information");
        }
    }
}
