package com.littledroplets;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;
import com.littledroplets.config.JwtFilter;
import static org.springframework.boot.SpringApplication.*;

@ComponentScan(basePackages ="com.littledroplets.*")
@SpringBootApplication
@EnableScheduling
public class Application {	
	
	@Bean
	public FilterRegistrationBean jwtFilter() {
		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/rest/*");
		return registrationBean;
	}
	
	public static void main(String[] args) {
		ConfigurableApplicationContext run = run(Application.class, args);
	}
}
