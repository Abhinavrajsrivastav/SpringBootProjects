package com.example.findmovie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class FindmovieApplication {

	public static void main(String[] args) {
		SpringApplication.run(FindmovieApplication.class, args);
	}

}
