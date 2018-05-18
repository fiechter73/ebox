package com.einstellbox.angular.models;


import org.springframework.data.annotation.Id;


public class Product {
	
	@Id
	private String id;
	private String productName;
	private String[] description;
	private String imageUrl;
	private Number price;
	private Number quanitity;
	
	
    public Product() {
    }

    public Product(String productName, String[] description, String imageUrl, Number quantity, Number price) {
    	this.productName = productName; 
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
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
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
