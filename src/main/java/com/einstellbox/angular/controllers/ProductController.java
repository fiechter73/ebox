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
    public Contact saveProduct(@PathVariable String idcontact, @PathVariable String idcontract, @RequestBody Product[] product) {
    	list = null;
    	pList = null;
    	Contact c =contactRepository.findOne(idcontact);
    	//System.out.println("IdContact : " +c.getId());
    	if (c.getContracts() != null && c.getContracts().size()!= 0) {
    		list = c.getContracts();
    		Contract con = null;
            Iterator<Contract> iter = list.iterator();
        	while (iter.hasNext() ) {    		
        		con =iter.next();
        		if (con.getId().equals(idcontract)) {
        		  // System.out.println("Size: " +con.getProducts().size());
        		   if (con.getProducts() != null && con.getProducts().size()!= 0) {
            		   pList = con.getProducts();
        		   } else {
        		      pList = new ArrayList<Product>();
        		   }	
        		   for (int i=0; i<product.length; i++) {
        		     //System.out.println("Name: " +product[i].getName());
        			 product[i].setId(UUID.randomUUID().toString());
         			 pList.add(product[i]);
        		   }
        		   con.setProducts(pList);
        		}	
        	}
    	}
    	contactRepository.save(c);
    	return c;
    }
    
    @RequestMapping(method=RequestMethod.PUT, value="api/productdel/{idcontact}/{idcontract}/{idproduct}")
    public String delProduct(@PathVariable String idcontact, @PathVariable String idcontract, 
    		                 @PathVariable String idproduct, @RequestBody Product product ) {
    	System.out.println("Contact: "+ idcontact);
    	System.out.println("Contract: " +idcontract);
    	System.out.println("Produkt: "+ idproduct);
    	Contact c = contactRepository.findOne(idcontact);
    	System.out.println("Get Address: "+c.getAddress());
        List<Contract> list = c.getContracts();
        Contract con = null;
        Iterator<Contract> iter = list.iterator();
    	while (iter.hasNext() ) {    		
    		con =iter.next();
    		if (con.getId().equals(idcontract)) {
    			List <Product> prodList = con.getProducts();
    			Product prod = null; 
    			Iterator<Product> iterProd = prodList.iterator();
    			while (iterProd.hasNext() ) {
    				prod = iterProd.next();
    				if (prod.getId().equals(product.getId())) {
            			System.out.println(prod.getName());
    					prodList.remove(prod);
    	    			break;
    				}
    			}
    	    	con.setProducts(prodList);
    		}
    	}
    	contactRepository.save(c);
    	return "";
    }
}
