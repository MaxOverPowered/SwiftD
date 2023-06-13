package com.swift_server_java.controller;

import com.swift_server_java.service.EmailService;
import com.swift_server_java.service.UserService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController extends BaseController{

    public UserController(EmailService emailService, UserService userService) {
        super(emailService, userService);
    }

}
