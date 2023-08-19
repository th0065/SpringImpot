package com.groupeisi.impot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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

import com.groupeisi.impot.dao.DeclarantRepository;
import com.groupeisi.impot.entities.Declarant;
import com.groupeisi.impot.exceptions.ResourceNotFoundException;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DeclarantController {

	@Autowired
	DeclarantRepository declarantRepository;
	
	@GetMapping("/declarants")
	public List<Declarant> getDeclarants(){
		return(List<Declarant>)declarantRepository.findAll();
	}
	
	@PostMapping(path ="/declarants",consumes = "application/json")
	public void addDeclarant(@RequestBody Declarant declarant) {
		
		declarantRepository.save(declarant);
	}
	
	@GetMapping("/declarants/{id}")
	public ResponseEntity<Declarant> getDeclarant(@PathVariable Long id) throws ResourceNotFoundException {
		Declarant declarant = declarantRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Declarant non touvé"));
		return ResponseEntity.ok().body(declarant);
		
	}
	
	@PutMapping(path="/declarants/{id}",consumes = "application/json")
	public int updateDeclarant(@RequestBody Declarant declarant, @PathVariable Long id) {
		int result=0;
	   Optional<Declarant> decl =	declarantRepository.findById(id);
	   if(decl.isPresent()) {
		 Declarant declarant0 = decl.get();
		 declarant0.setAdresse(declarant.getAdresse());
		 declarant0.setEmail(declarant.getEmail());
		 declarant0.setRaisonSociale(declarant.getRaisonSociale());
		 declarant0.setTelephone(declarant.getTelephone());
		  declarantRepository.save(declarant0);
		  result=1;
	   }
	return result;
		
	}
	
	@DeleteMapping("/declarants/{id}")
	public int deleteDeclarant(@PathVariable Long id) {
		 Optional<Declarant> declarant =	declarantRepository.findById(id);
		 int result = 0;
		 if(declarant.isPresent()) {
			 declarantRepository.delete(declarant.get());
			 result=1;
		 }
		
		
		
		return result;
		
	}
}
