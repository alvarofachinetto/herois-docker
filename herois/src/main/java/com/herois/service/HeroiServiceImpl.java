package com.herois.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.herois.model.Heroi;
import com.herois.repository.HeroiRepository;

@Service
public class HeroiServiceImpl implements HeroiService{

	@Autowired
	private HeroiRepository heroiRepository;
	
	public List<Heroi> herois() {
		return heroiRepository.findAll();
	}

	public Optional<Heroi> findById(Long id) {
		return heroiRepository.findById(id);
	}

	public Heroi insert(Heroi heroi) {
		return heroiRepository.save(heroi);
	}

	public Heroi update(Long id, Heroi heroi) throws Exception{
		if(findById(id).isPresent()) {
			return heroiRepository.save(heroi);
		}
		
		throw new Exception("Não existe esse registro!");
	}

	public void delete(Long id) {
		heroiRepository.deleteById(id);
	}

}
