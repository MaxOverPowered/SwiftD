package com.swift_server_java.controller;

import com.swift_server_java.payload.ApiResponse;
import com.swift_server_java.service.EmailService;
import com.swift_server_java.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.net.URI;

public class BaseController {
    protected EmailService emailService;
    protected UserService userService;

    public BaseController(EmailService emailService, UserService userService) {
        this.emailService = emailService;
        this.userService = userService;
    }

    protected ResponseEntity<String> statusOk(String responseMessage) {
        return new ResponseEntity<>(
                responseMessage,
                HttpStatus.OK);
    }

    protected ResponseEntity<String> statusBadRequest(String responseMessage) {
        return new ResponseEntity<>(
                responseMessage,
                HttpStatus.BAD_REQUEST);
    }

    protected ResponseEntity<ApiResponse> statusCreated(String responseMessage, URI uri) {
        return ResponseEntity.created(uri)
                .body(new ApiResponse(true, responseMessage + " created successfully"));
    }
}
