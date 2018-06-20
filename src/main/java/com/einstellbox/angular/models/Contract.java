package com.einstellbox.angular.models;


import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "contracts")
public class Contract {
    @Id
    String id;
    String type;   // BasisBox, Parkplatz
    String boxNr;
    String buildingInfo;
    Date contractStartDate;
    Date contractEndDate;
    List<Product> products;

    
    public Contract() {
    }

//    public Contract(String type, String boxNr, String buildingInfo, String contractStartDate, String contractEndDate) {
//    	this.type = type; 
//    	this.boxNr = boxNr;
//        this.buildingInfo = buildingInfo;
//        this.contractStartDate = contractStartDate;
//        this.contractEndDate = contractEndDate;
//    }
    
    public Contract(String type, String boxNr, String buildingInfo, Date contractStartDate, Date contractEndDate, List<Product> products) {
    	this.type = type; 
    	this.boxNr = boxNr;
        this.buildingInfo = buildingInfo;
        this.contractStartDate = contractStartDate;
        this.contractEndDate = contractEndDate;
        this.products = products;
    } 
    
	
    public List<Product> getProducts() {
		return this.products;
	}

	public void setProducts(List <Product> products) {
		this.products = products;
	}
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    
    public String getType() {
    	return type;
    }
    
    public void setType(String type) {
    	this.type = type; 
    }
    
    public String getBoxNr() {
    	return boxNr;
    }
    
    public void setBoxNr(String boxNr) {
    	this.boxNr = boxNr; 
    }
    
    public String getBuildingInfo() {
    	return buildingInfo;
    }
    
    public void setBuildingInfo(String buildingInfo) {
    	this.buildingInfo = buildingInfo; 
    }
    
    public Date getContractStartDate() {
    	return contractStartDate;
    }
    
    public void setContractStartDate(Date contractStartDate) {
    	this.contractStartDate = contractStartDate; 
    }
    
    public Date getContractEndDate() {
    	return contractEndDate;
    }
    
    public void setContractEndDate(Date contractEndDate) {
    	this.contractEndDate = contractEndDate; 
    }
    
    
	
}
