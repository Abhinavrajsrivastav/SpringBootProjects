package com.example.abhinav.demo.Service;

import com.example.abhinav.demo.Model.Student;
import com.example.abhinav.demo.Repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;  // Import from java.util.List

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student getStudent(Integer studentId){
        return studentRepository.findById(studentId).orElse(null); // Using orElse(null) to handle the case when no student is found
    }

    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }
}
