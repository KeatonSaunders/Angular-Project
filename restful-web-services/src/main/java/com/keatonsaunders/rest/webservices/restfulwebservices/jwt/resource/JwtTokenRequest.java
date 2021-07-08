package com.keatonsaunders.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZWF0b24iLCJleHAiOjE2MTA4OTIwMzEsImlhdCI6MTYxMDI4NzIzMX0.9g1G-l7Ku9NKRlujwTuzdYewq8uF3_SC1m75L_AQWHmKsz3dN5CpWXMwAHcmto7Yvx9B1tAbmi5Wv5Y5YBDttw"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}