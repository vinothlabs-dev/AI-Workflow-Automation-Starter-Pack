
package com.vinoth.aiworkflow.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Map;

@RestController
@CrossOrigin(
    origins = {
        "http://127.0.0.1:5500",
        "http://localhost:5500"
    },
    allowedHeaders = "*",
    methods = {
        RequestMethod.GET,
        RequestMethod.POST,
        RequestMethod.OPTIONS
    }
)
public class HelloController {

    @GetMapping("/api/hello")
    public String hello() {
        return "Welcome to AI Workflow Automation Starter Pack!";
    }

    @PostMapping("/api/process")
    public String processText(@RequestBody Map<String, String> request) {

        String text = request.get("text");

        return "Backend received your text: " + text;
    }
}
