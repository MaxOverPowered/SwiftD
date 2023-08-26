package com.swift_server_java.controller;

import com.swift_server_java.payload.UserSummary;
import com.swift_server_java.security.UserPrincipal;
import com.swift_server_java.service.EmailService;
import com.swift_server_java.service.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController extends BaseController{

    public UserController(EmailService emailService, UserService userService) {
        super(emailService, userService);
    }

    @GetMapping("/api/user")
    @PreAuthorize("hasRole('ROLE_USER')")
    public UserSummary getCurrentUser(@AuthenticationPrincipal UserPrincipal currentUser) {
        return new UserSummary(currentUser.getId(), currentUser.getUsername(), currentUser.getEmail());
    }

}
