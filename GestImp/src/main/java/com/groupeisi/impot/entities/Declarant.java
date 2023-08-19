package com.groupeisi.impot.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name="Declarant")
public class Declarant {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name="raisonSociale")
	private String raisonSociale;
	
	@Column(name="adresse")
	private String adresse;
	
	@Column(name="email")
	private String email;
	
	@Column(name="telephone")
	private String telephone;

	

	
	
	
	
}
