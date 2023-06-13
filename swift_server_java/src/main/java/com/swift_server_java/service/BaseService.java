package com.swift_server_java.service;

import com.swift_server_java.repository.EmailRepository;
import com.swift_server_java.repository.UserRepository;

public class BaseService {

    protected UserRepository userRepository;
    protected EmailRepository emailRepository;

    public BaseService(UserRepository userRepository, EmailRepository emailRepository) {
        this.userRepository = userRepository;
        this.emailRepository = emailRepository;
    }
}
