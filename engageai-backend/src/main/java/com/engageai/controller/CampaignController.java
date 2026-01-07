package com.engageai.controller;

import com.engageai.model.Campaign;
import com.engageai.repository.CampaignRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/engageai/campaigns")
@RequiredArgsConstructor
public class CampaignController {
    private final CampaignRepository repo;

    @PostMapping
    public ResponseEntity<Campaign> create(@RequestBody Campaign c) {
        if (c.getStatus()==null) c.setStatus("DRAFT");
        return ResponseEntity.ok(repo.save(c));
    }

    @GetMapping
    public ResponseEntity<List<Campaign>> list() {
        return ResponseEntity.ok(repo.findAll());
    }

    @PostMapping("/preview/{id}")
    public ResponseEntity<String> preview(@PathVariable Long id) {
        Campaign c = repo.findById(id).orElse(null);
        if (c==null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok("PREVIEW:\n" + c.getContent());
    }

    @PostMapping("/post/{id}")
    public ResponseEntity<String> postNow(@PathVariable Long id) {
        Campaign c = repo.findById(id).orElse(null);
        if (c==null) return ResponseEntity.notFound().build();
        c.setStatus("POSTED");
        repo.save(c);
        return ResponseEntity.ok("Posted (mock) to platforms: " + c.getPlatform());
    }
}
