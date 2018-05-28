package com.einstellbox.angular.models;


import org.springframework.data.annotation.Id;


public class Product {
	
	@Id
	private String id;
	private String name;
	private String[] description;
	private String imageUrl;
	private Number quanitity;
	private Number price;
	
	
    public Product() {
    }

    public Product(String name, String[] description, String imageUrl, Number quantity, Number price) {
    	this.name = name; 
    	this.description = description;
        this.imageUrl = imageUrl;
        this.quanitity = quantity;
        this.price = price;
    }
	
    
	public Number getQuanitity() {
		return quanitity;
	}

	public void setQuanitity(Number quanitity) {
		this.quanitity = quanitity;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String[] getDescription() {
		return description;
	}
	public void setDescription(String[] description) {
		this.description = description;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public Number getPrice() {
		return price;
	}
	public void setPrice(Number price) {
		this.price = price;
	}
	
	
	
	

}
