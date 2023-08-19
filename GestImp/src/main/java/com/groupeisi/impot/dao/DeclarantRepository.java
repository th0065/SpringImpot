package com.groupeisi.impot.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.groupeisi.impot.entities.Declarant;


@Repository
public interface DeclarantRepository extends CrudRepository<Declarant, Long>{

}
