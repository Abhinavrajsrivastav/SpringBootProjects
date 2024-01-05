package com.example.abhinav.demo.Model;

import org.hibernate.annotations.Collate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int Id;
    @Column(name = "Name", nullable = false)
    private String Name;

    public void setName(String name) {
        this.Name = name;
    }

    public String getName(){
        return this.Name;
    } 

}
