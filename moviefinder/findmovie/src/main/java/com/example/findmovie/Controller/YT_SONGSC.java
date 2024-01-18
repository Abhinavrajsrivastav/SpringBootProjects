// package com.example.findmovie.Controller;

// import org.springframework.web.bind.annotation.RestController;


// import com.google.api.services.youtube.YouTube;
// import com.google.api.services.youtube.model.*;

// import java.io.IOException;
// import java.util.List;

// public class YT_SONGSC  {

//     private static final String API_KEY = "YOUR_API_KEY";

//     public static void main(String[] args) throws IOException {
//         // Create a YouTube object
//         YouTube youtube = new YouTube.Builder(
//                 Auth.HTTP_TRANSPORT, Auth.JSON_FACTORY, request -> {})
//                 .setApplicationName("Your-Application-Name")
//                 .build();

//         // Define the API request
//         YouTube.Search.List search = youtube.search().list("id,snippet");
//         search.setKey(API_KEY);
//         search.setQ("Your Search Query");  // e.g., song name or artist
//         search.setType("video");

//         // Execute the request and process the response
//         SearchListResponse searchResponse = search.execute();
//         List<SearchResult> searchResults = searchResponse.getItems();

//         if (searchResults != null) {
//             for (SearchResult result : searchResults) {
//                 // Extract video details
//                 String videoId = result.getId().getVideoId();
//                 String title = result.getSnippet().getTitle();

//                 System.out.println("Video ID: " + videoId);
//                 System.out.println("Title: " + title);
//             }
//         }
//     }
// }
