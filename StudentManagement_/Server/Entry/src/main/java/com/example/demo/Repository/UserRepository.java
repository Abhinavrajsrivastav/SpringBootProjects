package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.User;

//===> Long dataType primaryKey of User entity
public interface UserRepository extends JpaRepository<User, Long>{
    
}
