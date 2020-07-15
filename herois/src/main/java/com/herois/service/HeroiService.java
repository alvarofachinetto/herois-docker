package com.herois.service;

import java.util.List;
import java.util.Optional;

import com.herois.model.Heroi;

public interface HeroiService {

	public List<Heroi> herois();
	
	public Optional<Heroi> findById(Long id);
	
	public Heroi insert (Heroi heroi);
	
	public Heroi update (Long id, Heroi heroi) throws Exception;
	
	public void delete (Long id);
	
}
