package com.example.demo.Config;

import java.beans.BeanProperty;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class AppConfig {
     
   @Bean
    public UserDetailsService userDetailService(){
        UserDetails user1 =  User.builder().username("Anuj").password(passwordEncoder().encode("abc")).roles("USER").build();
        UserDetails user2 =  User.builder().username("Ankit").password(passwordEncoder().encode("abc")).roles("USER").build();
        return new InMemoryUserDetailsManager(user1,user2);
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
