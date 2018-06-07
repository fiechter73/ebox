package com.einstellbox.angular.controllers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.einstellbox.angular.models.Contract;
import com.einstellbox.angular.models.Product;
import com.einstellbox.angular.models.Contact;
import com.einstellbox.angular.repositories.ContactRepository;
import com.einstellbox.angular.repositories.ProductRepository;

@RestController
public class ProductController {
	
	private List<Contract> list = null;
	private List<Product> pList = null;
	
    @Autowired
    ProductRepository productRepository;
    
    @Autowired
    ContactRepository contactRepository;

        
    
    @RequestMapping(method=RequestMethod.GET, value="/api/products/{idcontact}/{idcontract}")
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
    
    @RequestMapping(method=RequestMethod.POST, value="api/products/{idcontact}/{idcontract}")
    public Contact saveProduct(@PathVariable String idcontact, @PathVariable String idcontract, @RequestBody Product product) {
    	list = new ArrayList<Contract>();
    	pList = new ArrayList<Product>();
    	Contact c =contactRepository.findOne(idcontact);
    	System.out.println(c.getEmail());
    	if (c.getContracts() != null && c.getContracts().size()!= 0) {
    		list = c.getContracts();
    		Contract con = null;
            Iterator<Contract> iter = list.iterator();
        	while (iter.hasNext() ) {    		
        		con =iter.next();
        		if (con.getId().equals(idcontract)) {
        			System.out.println("Output: "+ con.getBoxNr());
        			product.setId(UUID.randomUUID().toString());
        			if (con.getProdcuts() != null && con.getProdcuts().size()!= 0) {
            			pList = con.getProdcuts();
            			pList.add(product);
        			}
        			pList.add(product);
        			con.setProducts(pList);
        		}	
        	}
    	}
    	contactRepository.save(c);
    	return c;
    }

}
