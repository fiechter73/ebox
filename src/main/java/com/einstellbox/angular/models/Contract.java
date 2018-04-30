package com.einstellbox.angular.models;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "contracts")
public class Contract {
    @Id
    String id;
    String type;   // BasisBox, Parkplatz
    String boxNr;
    String buildingInfo;
    String contractStartDate;
    String contractEndDate;

    
    public Contract() {
    }

    public Contract(String type, String boxNr, String buildingInfo, String contractStartDate, String contractEndDate) {
    	this.type = type; 
    	this.boxNr = boxNr;
        this.buildingInfo = buildingInfo;
        this.contractStartDate = contractStartDate;
        this.contractEndDate = contractEndDate;
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
    
    public String getContractStartDate() {
    	return contractStartDate;
    }
    
    public void setContractStartDate(String contractStartDate) {
    	this.contractStartDate = contractStartDate; 
    }
    
    public String getContractEndDate() {
    	return contractEndDate;
    }
    
    public void setContractEndDate(String contractEndDate) {
    	this.contractEndDate = contractEndDate; 
    }
    
    
	
}
