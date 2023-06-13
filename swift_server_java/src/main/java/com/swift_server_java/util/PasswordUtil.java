package com.swift_server_java.util;

import org.springframework.security.crypto.password.PasswordEncoder;

public class PasswordUtil {
    public static String passwordEncode(String password, PasswordEncoder passwordEncoder) {
        if (password.isBlank()) {
            return null;
        }
        return passwordEncoder.encode(password);
    }

    public static boolean passwordDecode(String newPassword, String currentPassword, PasswordEncoder passwordEncoder) {
        return passwordEncoder.matches(newPassword, currentPassword);
    }
}
