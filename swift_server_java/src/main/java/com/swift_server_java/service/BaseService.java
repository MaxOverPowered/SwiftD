package com.swift_server_java.service;

import com.swift_server_java.service.repository.EmailRepository;

public class BaseService {
    protected EmailRepository emailRepository;

    public BaseService(EmailRepository emailRepository) {
        this.emailRepository = emailRepository;
    }
}
