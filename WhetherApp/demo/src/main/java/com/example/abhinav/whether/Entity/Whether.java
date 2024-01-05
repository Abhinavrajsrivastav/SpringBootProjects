package com.example.abhinav.whether.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Whether {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "city_name")
    private String cityName;

    public void setName(String name) {
        this.cityName = name;
    }

    public String getName() {
        return cityName;
    }
}
