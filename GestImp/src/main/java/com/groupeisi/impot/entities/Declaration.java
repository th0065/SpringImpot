package com.groupeisi.impot.entities;

import java.time.Instant;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="Declaration")
public class Declaration {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name="dateDeclaration")
	private LocalDate dateDeclaration;
	
	@Column(name="montantDeclaration")
	private double montantDeclaration;
	
	@ManyToOne
	@JoinColumn(name="idDeclarant")
	private Declarant declarant;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public LocalDate getDateDeclaration() {
		return dateDeclaration;
	}

	public void setDateDeclaration(LocalDate dateDeclaration) {
		this.dateDeclaration = dateDeclaration;
	}

	public double getMontantDeclaration() {
		return montantDeclaration;
	}

	public void setMontantDeclaration(double montantDeclaration) {
		this.montantDeclaration = montantDeclaration;
	}

	public Declarant getDeclarant() {
		return declarant;
	}

	public void setDeclarant(Declarant declarant) {
		this.declarant = declarant;
	}

	public Declaration(long id, LocalDate dateDeclaration, double montantDeclaration, Declarant declarant) {
		super();
		this.id = id;
		this.dateDeclaration = dateDeclaration;
		this.montantDeclaration = montantDeclaration;
		this.declarant = declarant;
	}
	
	
}
