package com.example.abhinav.whether.Entity.Reposistory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.abhinav.whether.Entity.Whether;

@Repository
public interface WhetherRepo extends JpaRepository<Whether, Integer> {

}
