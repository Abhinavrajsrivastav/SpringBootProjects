package com.example.marksdisplay.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.marksdisplay.Model.StudentMarks;
import com.example.marksdisplay.Service.MarksService;

@RestController
public class MarksController {
    

    @Autowired
    MarksService marksService;

    @PostMapping("/")
    public StudentMarks save(@RequestBody StudentMarks studentMarks) {
        return marksService.save(studentMarks);
    }
}
