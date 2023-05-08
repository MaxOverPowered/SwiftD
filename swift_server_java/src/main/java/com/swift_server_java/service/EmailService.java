package com.swift_server_java.service;

import com.swift_server_java.model.EmailDetails;
import com.swift_server_java.service.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService extends BaseService {

    @Autowired
    private JavaMailSender emailSender;
    @Value("${spring.mail.username}")
    private String companyEmail;

    public EmailService(EmailRepository emailRepository) {
        super(emailRepository);
    }

    public boolean hasSentTooManyEmails(String email) {
        int emailCount = emailRepository.countByEmail(email);
        return emailCount >= 3;
    }

    public void addEmailInDatabase(EmailDetails emailDetails) {
        emailRepository.save(emailDetails);
    }

    public final void sendEmail(EmailDetails emailDetails) {

        String emailBodyReply = "Hello 👋, " + emailDetails.getClientName() + "\n\nThank you for contacting us📨!\n\nWe have received your message and we appreciate you taking the time to write to us. Our team will review your message and we'll get back to you as soon as possible. We look forward to connecting with you soon!\n\nBest regards,\nThe Swift Dispatch 🚚 Team";
        String emailBody = "Hello i am " + emailDetails.getClientName() + ",\n\nWe hope this message finds you well. We wanted to let you know that " + emailDetails.getClientName() + " has sent you a new message:\n\n" + emailDetails.getClientMessage() + "\n\n- message\n\n" + emailDetails.getClientEmail() + "\n\n- email\n\n" + emailDetails.getClientName() + "\n\n- name\n\n" + emailDetails.getClientContactNumber() + "\n\n- contact\n\nThe Swift Dispatch 🚚 Team";

        SimpleMailMessage messageToSend = new SimpleMailMessage();
        messageToSend.setFrom(emailDetails.getClientEmail());
        messageToSend.setTo(companyEmail);
        messageToSend.setSubject("New message from " + emailDetails.getClientName());
        messageToSend.setText(emailBody);

//        emailSender.send(messageToSend);

        SimpleMailMessage autoReply = new SimpleMailMessage();
        autoReply.setFrom(companyEmail);
        autoReply.setTo(emailDetails.getClientEmail());
        autoReply.setSubject("Thank you for contacting us! The Swift Dispatch 🚚 Team!");
        autoReply.setText(emailBodyReply);

//        emailSender.send(autoReply);
    }
}
