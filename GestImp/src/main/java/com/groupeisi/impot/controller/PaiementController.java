package com.groupeisi.impot.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.groupeisi.impot.dao.PaiementRepository;
import com.groupeisi.impot.entities.Paiement;
import com.groupeisi.impot.exceptions.ResourceNotFoundException;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PaiementController {

	@Autowired
	PaiementRepository paiementRepository;
	
	@GetMapping("/paiements")
	public List<Paiement> getPaiements(){
		return(List<Paiement>)paiementRepository.findAll();
	}
	
	@PostMapping(path="/paiements",consumes = "application/json")
	@ResponseStatus(code = HttpStatus.CREATED)
	public void addCategory( @RequestBody Paiement paiement) {
		paiement.setDatePaiement(LocalDate.now());
		paiementRepository.save(paiement);
	}
	
	@GetMapping("/paiements/{id}")
	public ResponseEntity<Paiement> getPaiement(@PathVariable Long id) throws ResourceNotFoundException {
		Paiement paiement = paiementRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Paiement non touvé"));
		return ResponseEntity.ok().body(paiement);
		
	}
	
	@PutMapping(path="/paiements/{id}",consumes = "application/json")
	public int updatePaiement(@RequestBody Paiement paiement, @PathVariable Long id) {
		int result=0;
	   Optional<Paiement> paie =	paiementRepository.findById(id);
	   if(paie.isPresent()) {
		 Paiement paiement0 = paie.get();
		  paiement0.setDeclaration(paiement.getDeclaration());
		  paiement0.setMontantPaiement(paiement.getMontantPaiement());
		  paiement0.setDatePaiement(paiement.getDatePaiement());
		  paiementRepository.save(paiement0);
		  result=1;
	   }
	return result;
		
	}
	
	@DeleteMapping("/paiements/{id}")
	public int deletePaiement(@PathVariable Long id) {
		 Optional<Paiement> paiement =	paiementRepository.findById(id);
		 int result = 0;
		 if(paiement.isPresent()) {
			 paiementRepository.delete(paiement.get());
			 result=1;
		 }
		
		
		
		return result;
		
	}
}
