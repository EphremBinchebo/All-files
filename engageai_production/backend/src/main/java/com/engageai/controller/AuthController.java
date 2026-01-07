package com.engageai.controller;

import com.engageai.model.User;
import com.engageai.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RestController
@RequestMapping("/api/engageai/auth")
public class AuthController {

    private final UserRepository userRepo;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public AuthController(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User u) {
        if (userRepo.findByEmail(u.getEmail()).isPresent()) return ResponseEntity.badRequest().body("User exists");
        u.setPassword(encoder.encode(u.getPassword()));
        var saved = userRepo.save(u);
        return ResponseEntity.ok(java.util.Map.of("id", saved.getId()));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User u) {
        var user = userRepo.findByEmail(u.getEmail()).orElse(null);
        if (user==null) return ResponseEntity.status(401).body("invalid");
        if (!encoder.matches(u.getPassword(), user.getPassword())) return ResponseEntity.status(401).body("invalid");
        return ResponseEntity.ok(java.util.Map.of("id", user.getId(), "token", "mock-jwt-token"));
    }
}
