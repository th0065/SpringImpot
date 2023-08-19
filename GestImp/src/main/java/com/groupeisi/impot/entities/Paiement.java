package com.groupeisi.impot.entities;

import java.time.Instant;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="Paiement")
public class Paiement {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name="datePaiement")
	private LocalDate datePaiement;
	
	@Column(name="montantPaiement")
	private double montantPaiement;
	
	@OneToOne
	@JoinColumn(name="idDeclaration")
	private Declaration declaration;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public LocalDate getDatePaiement() {
		return datePaiement;
	}

	public void setDatePaiement(LocalDate datePaiement) {
		this.datePaiement = datePaiement;
	}

	public double getMontantPaiement() {
		return montantPaiement;
	}

	public void setMontantPaiement(double montantPaiement) {
		this.montantPaiement = montantPaiement;
	}

	public Declaration getDeclaration() {
		return declaration;
	}

	public void setDeclaration(Declaration declaration) {
		this.declaration = declaration;
	}

	public Paiement(long id, LocalDate datePaiement, double montantPaiement, Declaration declaration) {
		super();
		this.id = id;
		this.datePaiement = datePaiement;
		this.montantPaiement = montantPaiement;
		this.declaration = declaration;
	}
	
}
