package com.example.abhinav.demo.Model;

import org.hibernate.annotations.Collate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;

    @Column(name = "Name", nullable = false)
    private String Name;

    @Column(name = "Roll No.", nullable = false)
    private String StudentId;

    @Column(name = "Department", nullable = false)
    private String Department;

    // Other methods remain unchanged


    public void setName(String name) {
        this.Name = name;
    }

    public String getName(){
        return this.Name;
    }
    
    public void setStudentId(String studentId){
        this.StudentId = studentId;
    }

    public String getStudentId(){
        return this.StudentId;
    }

    public void setDepartment(String department){
        this.Department = department;
    }

    public String getDepartment(){
        return this.Department;
    }

   
    @Override
    public String toString() {
        return "Student{" +
                "Id=" + Id +
                ", Name='" + Name + '\'' +
                ", StudentId='" + StudentId + '\'' +
                ", Department='" + Department + '\'' +
                '}';
    }

}
