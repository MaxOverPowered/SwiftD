package com.swift_server_java.controller;

import com.swift_server_java.model.User;
import com.swift_server_java.payload.ApiResponse;
import com.swift_server_java.payload.AuthResponse;
import com.swift_server_java.payload.LoginRequest;
import com.swift_server_java.payload.SignUpRequest;
import com.swift_server_java.security.TokenProvider;
import com.swift_server_java.service.EmailService;
import com.swift_server_java.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/api/auth")
public class AuthController extends BaseController {

    private final Logger logger = LoggerFactory.getLogger(AuthController.class);

    private final AuthenticationManager authenticationManager;
    private final TokenProvider tokenProvider;
    public AuthController(EmailService emailService,
                          UserService userService,
                          AuthenticationManager authenticationManager,
                          TokenProvider tokenProvider) {
        super(emailService, userService);
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
    }


    @PostMapping("/login")
    public ResponseEntity<AuthResponse> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        logger.info("authenticateUser with parameter: loginRequest = {}", loginRequest);

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.createToken(authentication);
        return ResponseEntity.ok(new AuthResponse(token));
    }

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        logger.info("registerUser with parameter: signUpRequest = {}", signUpRequest);

        User user = userService.registerUser(signUpRequest);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/user/me")
                .buildAndExpand(user.getId()).toUri();

        return statusCreated("User", uri);
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {
        logger.info("logout without parameters");

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }

        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }

        return statusOk("User logout success");
    }

}