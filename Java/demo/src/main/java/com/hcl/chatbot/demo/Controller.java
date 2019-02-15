package com.hcl.chatbot.demo;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class Controller {
	
	@GetMapping
	@SuppressWarnings("unused")
	@RequestMapping(value = "/jwtToken")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public Map<String, String> getToken(HttpServletRequest request) throws Exception {
		Map<String, String> resut = new HashMap<>();
		LocalDateTime tomorrow = LocalDateTime.now().plusDays(1);
		long tomoMilli = Timestamp.valueOf(tomorrow).getTime();
		long currentTime = System.currentTimeMillis();
		Map<String, Object> claims = new HashMap<>();
		claims.put("botName", "BPMBot");
		claims.put("isAnonymous", "true");
		claims.put("clientId", "cs-ab016638-fb6d-5270-babc-0af6e9cda43d");
		claims.put("sub", "vamsi.kallam@hcl.com");
		JSONObject jsonCUstomData = new JSONObject();
		jsonCUstomData.put("userEmail", "vamsi.kallam@db.com");
		claims.put("custom",jsonCUstomData);
		Map<String, Object> header = new HashMap<>();
		header.put("typ", "JWT");
		header.put("alg", "HS256");
		
		Enumeration<String> params = request.getParameterNames(); 
		while(params.hasMoreElements()){
		 String paramName = params.nextElement();
		 System.out.println("Parameter Name - "+paramName+", Value - "+request.getParameter(paramName));
		 System.out.println("Parameter Name - "+paramName+", Value - "+request.getHeader(paramName));
		}
		
		String builder = Jwts.builder()
				.setId("st-9a32815d-9414-5258-9538-f317afbcc9bf")
				.setClaims(claims)
				.setIssuer("cs-ab016638-fb6d-5270-babc-0af6e9cda43d")
				.setIssuedAt(new Date(System.currentTimeMillis())).setSubject("bot_1")
				.setExpiration(new Date(tomoMilli))
				.setHeader(header)
				.signWith(SignatureAlgorithm.HS256, "ElBU2Nq9NqMO7vB8hMiuQV2kbLWtiVFNotjDM25w0TQ=".getBytes())
				.compact();
		resut.put("token", builder);
		return resut;

	}

}
