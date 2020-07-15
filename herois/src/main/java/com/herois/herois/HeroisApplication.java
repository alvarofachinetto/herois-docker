package com.herois.herois;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.herois.model.Heroi;
import com.herois.repository.HeroiRepository;

@SpringBootApplication
@ComponentScan("com.herois")
@EntityScan("com.herois.model")
@EnableJpaRepositories("com.herois.repository")
public class HeroisApplication implements CommandLineRunner{

	@Autowired
	private HeroiRepository heroiRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(HeroisApplication.class, args);
		
	}

	@Override
	public void run(String... args) throws Exception {

		
		List<Heroi> listHerois = 
				List.of(
					new Heroi("Batman", "Dinheiro", "Coringa"),
					new Heroi("Naruto", "Biju 9 Caldas", "Akatsu"),
					new Heroi("Cornos", "Lagrimas", "Marilia Mendonça")
				);
		
		listHerois.forEach(heroi -> heroiRepository.save(heroi));
		
	}

}
