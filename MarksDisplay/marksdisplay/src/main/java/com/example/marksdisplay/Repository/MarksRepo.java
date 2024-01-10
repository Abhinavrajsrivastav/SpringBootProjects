package com.example.marksdisplay.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.marksdisplay.Model.StudentMarks;

public interface MarksRepo extends JpaRepository<StudentMarks, Integer> {
    
}
