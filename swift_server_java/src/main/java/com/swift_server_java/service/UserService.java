package com.swift_server_java.service;

import com.swift_server_java.exception.BadRequestException;
import com.swift_server_java.model.User;
import com.swift_server_java.model.types.AuthProvider;
import com.swift_server_java.payload.SignUpRequest;
import com.swift_server_java.repository.EmailRepository;
import com.swift_server_java.repository.UserRepository;
import com.swift_server_java.util.PasswordUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService extends BaseService {

    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository,
                       EmailRepository emailRepository,
                       PasswordEncoder passwordEncoder) {

        super(userRepository, emailRepository);
        this.passwordEncoder=passwordEncoder;
    }

    public User registerUser(SignUpRequest signUpRequest) {
        if (signUpRequest.getEmail() != null && userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new BadRequestException("Email address already in use.");
        }

        AuthProvider provider = AuthProvider.GOOGLE.equals(signUpRequest.getAuthProvider()) ? AuthProvider.GOOGLE : AuthProvider.LOCAL;

        User user = new User();
        user.setName(signUpRequest.getName());
        user.setEmail(signUpRequest.getEmail());
        user.setProvider(provider);
        user.setPassword(PasswordUtil.passwordEncode(signUpRequest.getPassword(), passwordEncoder));
        return userRepository.save(user);
    }
}
