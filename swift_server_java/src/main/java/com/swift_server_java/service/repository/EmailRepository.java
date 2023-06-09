package com.swift_server_java.service.repository;

import com.swift_server_java.model.EmailDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EmailRepository extends JpaRepository<EmailDetails, Long> {
    @Query("SELECT COUNT(e) FROM EmailDetails e WHERE e.clientEmail = :clientEmail")
    int countByEmail(@Param("clientEmail") String email);
}
