package com.swift_server_java.controller;

import com.swift_server_java.service.EmailService;
import com.swift_server_java.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.net.URI;

public class BaseController {
    protected EmailService emailService;

    public BaseController(EmailService emailService) {
        this.emailService = emailService;
    }

    protected ResponseEntity<String> statusOk(String responseMessage) {
        return new ResponseEntity<>(
                responseMessage,
                HttpStatus.OK);
    }

}
