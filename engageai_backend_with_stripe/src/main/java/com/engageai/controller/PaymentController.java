package com.engageai.controller;

import com.stripe.Stripe;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/engageai/payments")
public class PaymentController {

    @Value("${stripe.secret}")
    private String stripeSecret;

    @PostMapping("/create-intent")
    public Map<String, Object> createPaymentIntent(@RequestBody Map<String, Object> body) {
        Stripe.apiKey = stripeSecret;
        long amount = Long.parseLong(body.get("amount").toString());
        String currency = (String) body.getOrDefault("currency", "usd");

        try {
            PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                    .setAmount(amount)
                    .setCurrency(currency)
                    .build();
            PaymentIntent intent = PaymentIntent.create(params);
            Map<String, Object> resp = new HashMap<>();
            resp.put("clientSecret", intent.getClientSecret());
            resp.put("status", intent.getStatus());
            return resp;
        } catch (Exception e) {
            return Map.of("error", e.getMessage());
        }
    }
}
