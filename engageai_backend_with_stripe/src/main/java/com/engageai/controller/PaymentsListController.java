package com.engageai.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/engageai")
public class PaymentsListController {

    @GetMapping("/payments")
    public List<Map<String,Object>> payments() {
        return List.of(
                Map.of("id",1,"customer","Aisha M.","amount",49.99,"status","Succeeded","date","2025-09-25T10:20:00Z"),
                Map.of("id",2,"customer","BlueLeaf Co","amount",199.0,"status","Succeeded","date","2025-10-01T12:30:00Z")
        );
    }
}
