package com.einstellbox.angular.controllers;

import com.einstellbox.angular.models.Contact;
import com.einstellbox.angular.models.Contract;

import com.einstellbox.angular.repositories.ContactRepository;
import com.einstellbox.angular.repositories.ContractRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactController {
	
	private List<Contract> list = new ArrayList<Contract>();

    @Autowired
    ContactRepository contactRepository;
    
    @Autowired
    ContractRepository contractRepository;

    @RequestMapping(method=RequestMethod.GET, value="/contacts")
    public Iterable<Contact> contact() {
        return contactRepository.findAll();
    }

    @RequestMapping(method=RequestMethod.POST, value="/contacts")
    public Contact save(@RequestBody Contact contact) {
        contactRepository.save(contact);

        return contact;
    }
    
    @RequestMapping(method=RequestMethod.POST, value="/contacts/{id}")
    public Contact add(@PathVariable String id, @RequestBody Contract contract) {
    	Contact c =contactRepository.findOne(id);
    	//System.out.println(c.getEmail());
    	if (c.getContracts() != null && c.getContracts().size()!= 0) {
    		list = c.getContracts();
    	}
    		contractRepository.save(contract);
    		list.add(contract);
    		c.setContracts(list);
    		contactRepository.save(c);
    	return c;
    }

    @RequestMapping(method=RequestMethod.GET, value="/contacts/{id}")
    public Contact show(@PathVariable String id) {
        return contactRepository.findOne(id);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/contacts/{id}")
    public Contact update(@PathVariable String id, @RequestBody Contact contact) {
        Contact c = contactRepository.findOne(id);
        if(contact.getAnrede() != null)
        	c.setAnrede(contact.getAnrede());
        if(contact.getName() != null)
            c.setName(contact.getName());
        if(contact.getAddress() != null)
            c.setAddress(contact.getAddress());
        if(contact.getCity() != null)
            c.setCity(contact.getCity());
        if(contact.getPhone() != null)
            c.setPhone(contact.getPhone());
        if(contact.getEmail() != null)
            c.setEmail(contact.getEmail());
        contactRepository.save(c);
        return contact;
    }
    
    @RequestMapping(method=RequestMethod.DELETE, value="/contacts/{id}")
    public String delete(@PathVariable String id) {
        Contact contact = contactRepository.findOne(id);
        contactRepository.delete(contact);
        return "";
    }
}
