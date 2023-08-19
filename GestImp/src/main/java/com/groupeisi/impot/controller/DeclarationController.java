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

import com.groupeisi.impot.dao.DeclarationRepository;
import com.groupeisi.impot.entities.Declaration;
import com.groupeisi.impot.exceptions.ResourceNotFoundException;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DeclarationController {

	@Autowired
	DeclarationRepository declarationRepository;
	
	@GetMapping("/declarations")
	public List<Declaration> getDeclarations(){
		return(List<Declaration>)declarationRepository.findAll();
	}
	
	@PostMapping(path="/declarations",consumes = "application/json")
	@ResponseStatus(code = HttpStatus.CREATED)
	public void addCategory( @RequestBody Declaration declaration) {
		declaration.setDateDeclaration(LocalDate.now());
		declarationRepository.save(declaration);
	}
	
	@GetMapping("/declarations/{id}")
	public ResponseEntity<Declaration> getDeclaration(@PathVariable Long id) throws ResourceNotFoundException {
		Declaration declaration = declarationRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Declaration non touvé"));
		return ResponseEntity.ok().body(declaration);
		
	}
	
	@PutMapping(path="/declarations/{id}",consumes = "application/json")
	public int updateDeclaration(@RequestBody Declaration declaration, @PathVariable Long id) {
		int result=0;
	   Optional<Declaration> decl =	declarationRepository.findById(id);
	   if(decl.isPresent()) {
		 Declaration declaration0 = decl.get();
		 declaration0.setDateDeclaration(declaration.getDateDeclaration());
		 declaration0.setDeclarant(declaration.getDeclarant());
		 declaration0.setMontantDeclaration(declaration.getMontantDeclaration());
		  declarationRepository.save(declaration0);
		  result=1;
	   }
	return result;
		
	}
	
	@DeleteMapping("/declarations/{id}")
	public int deleteDeclaration(@PathVariable Long id) {
		 Optional<Declaration> declaration =	declarationRepository.findById(id);
		 int result = 0;
		 if(declaration.isPresent()) {
			 declarationRepository.delete(declaration.get());
			 result=1;
		 }
		
		
		
		return result;
		
	}
}
