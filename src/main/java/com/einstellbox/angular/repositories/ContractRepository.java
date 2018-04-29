package com.einstellbox.angular.repositories;


import com.einstellbox.angular.models.Contract;
import org.springframework.data.repository.CrudRepository;

public interface ContractRepository extends CrudRepository<Contract, String> {
    @Override
    Contract findOne(String id);

    @Override
    void delete(Contract deleted);
}
