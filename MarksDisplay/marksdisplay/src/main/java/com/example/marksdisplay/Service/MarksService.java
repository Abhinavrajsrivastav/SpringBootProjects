package com.example.marksdisplay.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.marksdisplay.Model.StudentMarks;
import com.example.marksdisplay.Repository.MarksRepo;

import java.util.List; // Correct import for List

@Service
public class MarksService {

    @Autowired
    MarksRepo marksRepo;

    public StudentMarks save(StudentMarks studentMarks) {
        return marksRepo.save(studentMarks);
    }

    public List<StudentMarks> getAll() {
        return marksRepo.findAll();
    }
}
