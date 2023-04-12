package com.swift_server_java.controller;

import com.swift_server_java.model.EmailDetails;
import com.swift_server_java.service.EmailService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class EmailController {

    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send_email")
    public ResponseEntity<String> sendEmail(@Valid @RequestBody EmailDetails emailDetails, BindingResult bindingResult) throws MessagingException {

        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body("Invalid email details");
        }
        String email = emailDetails.getClientEmail();
        if (emailService.hasSentTooManyEmails(email)) {
            return new ResponseEntity<>("You have sent too many emails. Please wait for our response.", HttpStatus.BAD_REQUEST);
        }
        System.out.println(emailDetails);
        emailService.addEmailInDatabase(emailDetails);
        emailService.sendEmail(emailDetails);
        return  ResponseEntity.ok("Email sent successfully!");
    }
}
