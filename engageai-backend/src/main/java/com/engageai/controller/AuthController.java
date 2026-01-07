package com.engageai.controller;

import com.engageai.model.User;
import com.engageai.repository.UserRepository;
import com.engageai.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@RequestMapping("/api/engageai/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User u) {
        u.setPassword(passwordEncoder.encode(u.getPassword()));
        var saved = userRepo.save(u);
        return ResponseEntity.ok(java.util.Map.of("id", saved.getId()));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User u) {
        var user = userRepo.findByEmail(u.getEmail()).orElse(null);
        if (user == null) return ResponseEntity.status(401).body("invalid");
        if (!passwordEncoder.matches(u.getPassword(), user.getPassword())) return ResponseEntity.status(401).body("invalid");
        return ResponseEntity.ok(java.util.Map.of("token", jwtService.generateToken(user), "id", user.getId()));
    }
}
