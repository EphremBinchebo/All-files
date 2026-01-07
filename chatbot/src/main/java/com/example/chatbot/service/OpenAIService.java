package com.example.chatbot.service;

import com.example.chatbot.dto.ChatDTOs.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
public class OpenAIService {

    @Value("${openai.api.key}")
    private String openaiApiKey;

    @Value("${openai.model}")
    private String openaiModel;

    private final OkHttpClient client = new OkHttpClient();
    private final ObjectMapper mapper = new ObjectMapper();

    public String chat(ChatRequest req) throws IOException {
        Map<String, Object> body = new HashMap<>();
        body.put("model", openaiModel);
        body.put("messages", req.messages);

        RequestBody requestBody = RequestBody.create(
                mapper.writeValueAsString(body),
                MediaType.get("application/json; charset=utf-8")
        );

        Request request = new Request.Builder()
                .url("https://api.openai.com/v1/chat/completions")
                .header("Authorization", "Bearer " + openaiApiKey)
                .post(requestBody)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("Unexpected code " + response);
            }

            String json = response.body().string();
            JsonNode node = mapper.readTree(json);
            return node.get("choices").get(0).get("message").get("content").asText();
        }
    }
}
