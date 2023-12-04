package com.cg.as;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MallAdminController {
	
	@Autowired  //automatic connecton between ProductController class and ProductService class
	private MallAdminService Service;
	
		//Retrieval operation
		@GetMapping("/MallAdmin")  //we are calling outside appication from a web sever so only if we give malladmins only this operation will happen so mapping is used
		public List<MallAdmin> list(){
			return Service.listAll();
		}
		
		//retrive by id
		@GetMapping("/MallAdmin/{id}") 
		public ResponseEntity <MallAdmin> get(@PathVariable Integer id){
			try {
			MallAdmin mallAdmin = Service.get(id);
			return new ResponseEntity <MallAdmin>(mallAdmin,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity <MallAdmin>(HttpStatus.NOT_FOUND);
		}
		}
		
		// create new admin
		@PostMapping("/MallAdmin") 
		public void add(@RequestBody MallAdmin mallAdmin) {
			Service.save(mallAdmin);
		}
		
		//update a admin using id number operation
		@PutMapping("/MallAdmin/{id}") 
		public ResponseEntity<?> update(@RequestBody MallAdmin mallAdmin, @PathVariable Integer id){
		try {
			MallAdmin existProduct = Service.get(id);
			Service.save(mallAdmin); 
			return new ResponseEntity <> (HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		}
		
		//delete a admin using id operation
		@DeleteMapping("/MallAdmin/{id}")
		public void delete(@PathVariable Integer id) {
			Service.delete(id);
		}
}
