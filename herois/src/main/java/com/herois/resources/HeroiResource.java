package com.herois.resources;

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
import org.springframework.web.bind.annotation.RestController;

import com.herois.model.Heroi;
import com.herois.service.HeroiService;

@RestController
@RequestMapping("/herois")
@CrossOrigin(origins = "http://localhost:4200")
public class HeroiResource {

	@Autowired
	private HeroiService heroiService;
	
	@GetMapping
	public ResponseEntity<List<Heroi>> herois(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(heroiService.herois());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Heroi>> findById(@PathVariable Long id){
		return ResponseEntity.status(HttpStatus.OK)
							.body(heroiService.findById(id));
	}
	
	@PostMapping("/heroi")
	public ResponseEntity<Heroi> insert (@RequestBody Heroi heroi) {
		Heroi heroiNovo = heroiService.insert(heroi);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(heroiNovo); 
	}
	
	@PutMapping("/heroi/{id}")
	public ResponseEntity<Heroi> update (@PathVariable Long id, @RequestBody Heroi heroi) throws Exception{
		Heroi heroiNovo = heroiService.update(id, heroi);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(heroiNovo);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete (@PathVariable Long id) {
		heroiService.delete(id);
		return ResponseEntity.noContent().build();
	}
}
