package com.example.abhinav.whether.Entity.Service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.node.ObjectNode;

@Service
public class SeeService {

    private final String apiUrl = "http://api.weatherapi.com/v1/current.json?key=dafbcd5482eb433ea1e193453240101&q=";

    public String[] getWhether(String cityName) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<ObjectNode> response = restTemplate.getForEntity(apiUrl + cityName, ObjectNode.class);
            ObjectNode json = response.getBody();
            String[] data = new String[7];  
            data[0] = json.path("location").path("name").asText();  
            data[1] = json.path("location").path("localtime").asText();
            data[2] = json.path("current").path("temp_c").asText();
            data[3] = json.path("current").path("is_day").asText();
            data[4] = json.path("current").path("condition").path("icon").asText();
            data[5] = json.path("current").path("wind_mph").asText();
            data[6] = json.path("current").path("humidity").asText();          
            return data;
        } catch (HttpClientErrorException.NotFound e) {
            return null;
        } catch (Exception e) {
            System.out.println("Error fetching weather information: " + e.getMessage());
            return null;
        }
    }
}
