package com.example.marksdisplay.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.marksdisplay.Model.StudentMarks;
import com.example.marksdisplay.Service.MarksService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MarksController {
    

    @Autowired
    MarksService marksService;

    @PostMapping("/")
    public StudentMarks save(@RequestBody StudentMarks studentMarks) {
        return marksService.save(studentMarks);
    }

    @GetMapping("/")
    public List<StudentMarks> getAll() {
        return marksService.getAll();
    }
}
