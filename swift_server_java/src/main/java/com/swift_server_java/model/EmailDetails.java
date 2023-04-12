package com.swift_server_java.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmailDetails {

    @Id
    @Column(unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank(message = "Client name cannot be blank")
    private String clientName;

    @NotBlank(message = "Client email cannot be blank")
    @Email(message = "Client email should be a valid email address")
    private String clientEmail;

    @NotBlank(message = "Client message cannot be blank")
    private String clientMessage;

    @NotBlank(message = "Client contact number cannot be blank")
    private String clientContactNumber;

}