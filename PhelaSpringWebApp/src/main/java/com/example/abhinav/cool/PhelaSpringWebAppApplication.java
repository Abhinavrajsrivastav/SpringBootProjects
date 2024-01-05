package com.example.abhinav.cool;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.example.abhinav.webapp.controller"})
public class PhelaSpringWebAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(PhelaSpringWebAppApplication.class, args);
	}

}
