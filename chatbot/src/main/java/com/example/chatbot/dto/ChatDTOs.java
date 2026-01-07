package com.example.chatbot.dto;

import java.util.List;

public class ChatDTOs {
    public static class Message {
        public String role;
        public String content;
    }

    public static class ChatRequest {
        public List<Message> messages;
    }

    public static class ChatResponse {
        public String reply;
    }
}
