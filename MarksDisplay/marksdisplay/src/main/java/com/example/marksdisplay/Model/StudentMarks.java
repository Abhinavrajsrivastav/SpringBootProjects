package com.example.marksdisplay.Model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class StudentMarks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @Column
    private Integer marks;

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setName(String studentName) {
        this.name = studentName;
    }

    public String getName() {
        return name;
    }

    public void setMarks(Integer studentMarks) {
        this.marks = studentMarks;
    }

    public Integer getMarks() {
        return marks;
    }


}
