package com.example.chatbot.controller;

import com.example.chatbot.dto.ChatDTOs.*;
import com.example.chatbot.service.OpenAIService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/chat")
public class ChatController {

    private final OpenAIService openAIService;

    @Value("${app.api.key}")
    private String appApiKey;

    public ChatController(OpenAIService openAIService) {
        this.openAIService = openAIService;
    }

    @PostMapping
    public ChatResponse chat(@RequestBody ChatRequest req,
                             @RequestHeader("X-API-KEY") String headerKey) throws IOException {
        if (!appApiKey.equals(headerKey)) {
            throw new RuntimeException("Unauthorized");
        }
        String reply = openAIService.chat(req);
        ChatResponse resp = new ChatResponse();
        resp.reply = reply;
        return resp;
    }
}
