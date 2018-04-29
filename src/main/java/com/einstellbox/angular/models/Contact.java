package com.einstellbox.angular.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "contacts")
public class Contact {
    @Id
    String id;
    String anrede;
    String name;
    String address;
    String city;
    String phone;
    String email;

    public Contact() {
    }

    public Contact(String name, String anrede, String address, String city, String phone, String email) {
    	this.anrede = anrede; 
    	this.name = name;
        this.address = address;
        this.city = city;
        this.phone = phone;
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    
    public String getAnrede() {
    	return anrede;
    }
    
    public void setAnrede(String anrede) {
    	this.anrede = anrede; 
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
