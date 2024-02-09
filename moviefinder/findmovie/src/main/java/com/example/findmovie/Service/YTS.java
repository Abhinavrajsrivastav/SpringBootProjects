package com.example.findmovie.Service;

import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class YTS {

    private final String API_KEY = "AIzaSyCDHej1UCOZX-ODRIL7P1lhjhLuY-Saz7M";
    private final String API_URL = "https://www.googleapis.com/youtube/v3/search";

    public String getVideoId(String movieName) {
        String url = String.format("%s?q=%s&part=id&type=video&key=%s", API_URL, movieName, API_KEY);

    RestTemplate restTemplate = new RestTemplate();
    String response = restTemplate.getForObject(url, String.class);

        // Use a proper JSON parsing library to extract the videoId
        // This example uses Jackson ObjectMapper
    try {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(response);

        // Assuming the structure of the JSON response, adjust as needed
        JsonNode itemsNode = jsonNode.path("items");
        if (itemsNode.isArray() && itemsNode.size() > 0) {
            JsonNode videoIdNode = itemsNode.get(0).path("id").path("videoId");
                if (videoIdNode.isTextual()) {
                    return videoIdNode.asText();
                }
        }
        }
         catch (IOException e){
            e.printStackTrace();
        }
        return null;
    }

    public String generateYoutubeUrl(String movieName) {
        String videoId = getVideoId(movieName);
        if (videoId != null) {
            System.out.println("Video ID: " + videoId);
            return videoId;
        } else {
            return "Video not found.";
        }
    }
}

