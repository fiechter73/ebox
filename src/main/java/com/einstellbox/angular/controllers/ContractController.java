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
public class ContractController {

    @Autowired
    ContractRepository contractRepository;
    
    @Autowired
    ContactRepository  contactRespository; 

    @RequestMapping(method=RequestMethod.GET, value="/contracts")
    public Iterable<Contract> contract() {
        return contractRepository.findAll();
    }
    
    @RequestMapping(method=RequestMethod.POST, value="/contracts/{id}")
    public Contract add(@PathVariable String id, @RequestBody Contract contract) {
    	System.out.println(id);
    	System.out.println(contract.getType());
    	Contact c =contactRespository.findOne(id);
    	System.out.println(c.getEmail());
    	//if(contract.getId() == null ) {
    		List<Contract> list = new ArrayList<Contract>();
    		list.add(contract);
    		c.setContracts(list);
    		contactRespository.save(c);
    		//contractRepository.save(contract);
    	//}
    	return contract;

    }
    
    @RequestMapping(method=RequestMethod.POST, value="/contracts")
    public Contract save(@RequestBody Contract contract) {
	   contractRepository.save(contract);
       return contract;
    }
        
    @RequestMapping(method=RequestMethod.GET, value="/contracts/{id}")
    public Contract show(@PathVariable String id) {
        return contractRepository.findOne(id);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/contracts/{id}")
    public Contract update(@PathVariable String id, @RequestBody Contract contract) {
    	Contract c = contractRepository.findOne(id);
    	if (contract.getType() != null)
    		c.setType(contract.getType());
        if(contract.getBoxNr() != null)
        	c.setBoxNr(contract.getBoxNr());
        if(contract.getBuildingInfo() != null)
            c.setBuildingInfo(contract.getBuildingInfo());
        if(contract.getContractStartDate() != null)
            c.setContractStartDate(contract.getContractStartDate());
        if(contract.getContractEndDate() != null)
            c.setContractEndDate(contract.getContractEndDate());
        contractRepository.save(c);
        return contract;
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/contracts/{id}")
    public String delete(@PathVariable String id) {
        Contract contact = contractRepository.findOne(id);
        contractRepository.delete(contact);

        return "";
    }
}
