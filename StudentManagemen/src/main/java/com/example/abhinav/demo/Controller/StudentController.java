package com.example.abhinav.demo.Controller;

import com.example.abhinav.demo.Model.Student;
import com.example.abhinav.demo.Service.StudentService;

import ch.qos.logback.core.model.Model;

import java.lang.ProcessBuilder.Redirect;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;


    @GetMapping("/AddStudent")
    public ModelAndView getAddStudentForm(@RequestParam(required = false) Integer id) {
        String view = "AddStudent";
        Map<String, Object> model = new HashMap<>();

        if (id != null) {
            Student student = studentService.getStudent(id);
            model.put("student", student);
        } else {
            model.put("student", new Student());
        }

        return new ModelAndView(view, model);
    }

    @PostMapping("/AddStudent")
    public ModelAndView saveStudent(@ModelAttribute("student") Student student, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            String view = "AddStudent";
            Map<String, Object> model = new HashMap<>();
            model.put("student", student);
            return new ModelAndView(view, model);
        }

        studentService.saveStudent(student);
        RedirectView rd = new RedirectView();
        rd.setUrl("/AddStudent"); // Redirect to the form after saving

        return new ModelAndView(rd);
    }

    @GetMapping("/GetStudent")
    public ModelAndView viewStudents() {
        String view = "GetStudent";
        List<Student> students = studentService.getAllStudents();
        Map<String, Object> model = new HashMap<>();
        model.put("students", students);

        return new ModelAndView(view, model);
    }
}
