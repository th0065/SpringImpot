package com.groupeisi.impot.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.groupeisi.impot.entities.Paiement;

@Repository
public interface PaiementRepository extends CrudRepository<Paiement, Long> {

}
