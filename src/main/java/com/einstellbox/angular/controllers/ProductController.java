package com.einstellbox.angular.controllers;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.einstellbox.angular.models.Contact;
import com.einstellbox.angular.models.Contract;
import com.einstellbox.angular.models.Product;
import com.einstellbox.angular.repositories.ContactRepository;
import com.einstellbox.angular.repositories.ContractRepository;
import com.einstellbox.angular.repositories.ProductRepository;

@RestController
public class ProductController {
	
    @Autowired
    ProductRepository productRepository;
    
    @Autowired
    ContactRepository contactRepository;
        
    
    @RequestMapping(method=RequestMethod.GET, value="/products/{idcontact}/{idcontract}")
    public Contract showProduct(@PathVariable String idcontact, @PathVariable String idcontract ) {
        Contact c = contactRepository.findOne(idcontact);
        List<Contract> list = c.getContracts();
        System.out.println("Contact: "+ idcontact + " Contract:"+ idcontract);
        Contract con = null;
        Iterator<Contract> iter = list.iterator();
    	while (iter.hasNext() ) {    		
    		con =iter.next();
    		if (con.getId().equals(idcontract)) {
    			break;
    		}	
    	}
    	return con;
    }
    

}
