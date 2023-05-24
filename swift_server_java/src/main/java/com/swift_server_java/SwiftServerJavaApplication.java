package com.swift_server_java;

import com.swift_server_java.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class SwiftServerJavaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SwiftServerJavaApplication.class, args);
	}

}
