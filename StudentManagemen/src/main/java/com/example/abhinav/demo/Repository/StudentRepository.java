package com.example.abhinav.demo.Repository;

import com.example.abhinav.demo.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {
    // Custom query methods if needed
}
