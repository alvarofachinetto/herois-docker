package com.herois.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Heroi {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String nome;
	private String poder;
	private String rivalvilao;
	
	public Heroi() {
		// TODO Auto-generated constructor stub
	}
	
	public Heroi(String nome, String poder, String rivalvilao) {
		super();
		this.nome = nome;
		this.poder = poder;
		this.rivalvilao = rivalvilao;
	}


	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getPoder() {
		return poder;
	}
	public void setPoder(String poder) {
		this.poder = poder;
	}
	public String getRivalvilao() {
		return rivalvilao;
	}
	public void setRivalvilao(String rivalvilao) {
		this.rivalvilao = rivalvilao;
	}
	
	
	
}
