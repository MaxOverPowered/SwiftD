package com.swift_server_java.service;


import com.swift_server_java.repository.EmailRepository;
import com.swift_server_java.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService extends BaseService {


    public UserService(UserRepository userRepository,
                       EmailRepository emailRepository) {

        super(userRepository, emailRepository);
    }
}
