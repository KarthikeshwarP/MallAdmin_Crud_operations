package com.cg.as;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;





@Service
@Transactional
public class MallAdminService {
	
	@Autowired //auto connection establishment between productservice class and reposatory interface
	private MallAdminRepository repository;
	
	//getting list of all items
		public List<MallAdmin> listAll(){
			return repository.findAll();
		}
		
		//getting only pecific product base of its attribiute
		public MallAdmin get(Integer id) {
			return repository.findById(id).get();
		}
		
		//save new item
		public void save(MallAdmin mallAdmin) {
			repository.save(mallAdmin);
		}
		
		//detete method
		public void delete(Integer id) {
			repository.deleteById(id);
		}

}
