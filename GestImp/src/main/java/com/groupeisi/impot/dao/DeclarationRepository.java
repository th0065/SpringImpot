package com.groupeisi.impot.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.groupeisi.impot.entities.Declaration;

@Repository
public interface DeclarationRepository extends CrudRepository<Declaration, Long> {

}
