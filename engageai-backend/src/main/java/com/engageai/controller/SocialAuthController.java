package com.engageai.controller;

import com.engageai.model.User;
import com.engageai.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/engageai/auth")
public class SocialAuthController {
    private final UserRepository userRepo;

    @Value("${instagram.client.id}")
    private String instagramClientId;
    @Value("${instagram.client.secret}")
    private String instagramClientSecret;
    @Value("${instagram.redirect.uri}")
    private String instagramRedirectUri;

    @Value("${tiktok.client.id}")
    private String tiktokClientId;
    @Value("${tiktok.client.secret}")
    private String tiktokClientSecret;
    @Value("${tiktok.redirect.uri}")
    private String tiktokRedirectUri;

    @GetMapping("/instagram/login")
    public ResponseEntity<?> instagramLogin() {
        String url = "https://www.facebook.com/v16.0/dialog/oauth?client_id=" + instagramClientId
                + "&redirect_uri=" + instagramRedirectUri + "&scope=instagram_basic,pages_show_list,pages_read_engagement";
        return ResponseEntity.ok(java.util.Map.of("auth_url", url));
    }

    @GetMapping("/instagram/callback")
    public ResponseEntity<?> instagramCallback(@RequestParam(required=false) Long userId, @RequestParam(required=false) String code) {
        if (userId==null) return ResponseEntity.badRequest().body("provide userId as query param");
        var user = userRepo.findById(userId).orElse(null);
        if (user==null) return ResponseEntity.notFound().build();
        // TODO: exchange code for real token - placeholder
        user.setInstagramToken("mock_instagram_token_" + userId);
        userRepo.save(user);
        return ResponseEntity.ok(java.util.Map.of("status","connected","token",user.getInstagramToken()));
    }

    @GetMapping("/tiktok/login")
    public ResponseEntity<?> tiktokLogin() {
        String url = "https://open-api.tiktok.com/platform/oauth/connect/?client_key=" + tiktokClientId
                + "&scope=user.info.basic,video.upload&response_type=code&redirect_uri=" + tiktokRedirectUri;
        return ResponseEntity.ok(java.util.Map.of("auth_url", url));
    }

    @GetMapping("/tiktok/callback")
    public ResponseEntity<?> tiktokCallback(@RequestParam(required=false) Long userId, @RequestParam(required=false) String code) {
        if (userId==null) return ResponseEntity.badRequest().body("provide userId as query param");
        var user = userRepo.findById(userId).orElse(null);
        if (user==null) return ResponseEntity.notFound().build();
        // TODO: exchange code for real token - placeholder
        user.setTiktokToken("mock_tiktok_token_" + userId);
        userRepo.save(user);
        return ResponseEntity.ok(java.util.Map.of("status","connected","token",user.getTiktokToken()));
    }
}
