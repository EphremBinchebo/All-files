package com.engageai.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/engageai/auth")
public class AuthController {

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String,Object> body) {
        return ResponseEntity.ok(Map.of("id", 1));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String,Object> body) {
        // return a mock token for demo
        return ResponseEntity.ok(Map.of("id", 1, "token", "mock-jwt-token-1"));
    }
}
