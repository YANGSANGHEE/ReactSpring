package com.example.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
//Cors 설정
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//Fomatter : 객체를 문자열로 변환하거나 문자열을 객체로 변환 할 때 사용하는 인터페이스 // parser 같은 개념인듯
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//

@Configuration
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
		.allowedOrigins("http://localhost:3000")
		.allowedMethods("OPTIONS","GET","POST","PUT","DELETE");
	}
}
