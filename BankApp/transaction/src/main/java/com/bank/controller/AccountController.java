package com.bank.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

import com.bank.model.Account;
import com.bank.persistence.AccountRepository;

@RestController
@CrossOrigin
public class AccountController {
	@Autowired
    private AccountRepository accountRepository;
	
	@GetMapping("/balance/{account}")
    public ResponseEntity<Double> getBalance(@PathVariable("account") String account) {
        ResponseEntity<Double> responseEntity;
		try {
            Account receivedAccount = accountRepository.findByAccount(account);
            responseEntity = new ResponseEntity<>(receivedAccount.getBalance(), HttpStatus.OK);
        }catch(HttpClientErrorException.BadRequest br){
            responseEntity = new ResponseEntity<>(-1.0, HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            responseEntity = new ResponseEntity<>(-2.0, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
	}
	
	@PostMapping("/deposit")
	public ResponseEntity<Double> deposit(@RequestBody Map<String, String> data) {
        ResponseEntity<Double> responseEntity;
        try{
        	Double value = (Double.parseDouble(data.get("value")));
        	if(value <= 0) {
        		return new ResponseEntity<>(-1.0, HttpStatus.FORBIDDEN);
        	}
        	Account existingAccount = accountRepository.findByAccount(data.get("account"));
        	existingAccount.setBalance(existingAccount.getBalance() + value);
        	accountRepository.save(existingAccount);
        	responseEntity = new ResponseEntity<>(existingAccount.getBalance(), HttpStatus.OK);
        }catch(HttpClientErrorException.BadRequest br){
            responseEntity = new ResponseEntity<>(-2.0, HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            e.printStackTrace();
            responseEntity = new ResponseEntity<>(-3.0, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
	}
	
	@PostMapping("/withdraw")
	public ResponseEntity<Double> withdraw(@RequestBody Map<String, String> data) {
        ResponseEntity<Double> responseEntity;
        try{
        	Double value = (Double.parseDouble(data.get("value")));
        	Account existingAccount = accountRepository.findByAccount(data.get("account"));
        	if(value <= 0) {
        		return new ResponseEntity<>(-1.0, HttpStatus.FORBIDDEN);
        	}
        	else if(value > existingAccount.getBalance()) {
        		return new ResponseEntity<>(-2.0, HttpStatus.FORBIDDEN);
        	}
        	existingAccount.setBalance(existingAccount.getBalance() - value);
        	accountRepository.save(existingAccount);
        	responseEntity = new ResponseEntity<>(existingAccount.getBalance(), HttpStatus.OK);
        }catch(HttpClientErrorException.BadRequest br){
            responseEntity = new ResponseEntity<>(-3.0, HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            e.printStackTrace();
            responseEntity = new ResponseEntity<>(-4.0, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
	}
	
    @PostMapping("/createAccount")
    public ResponseEntity createAccount(@RequestBody Map<String, String> data) {
        ResponseEntity responseEntity;
        try{
            Account account = new Account();
            account.setAccount(data.get("account"));
            account.setBalance(0.0);
            accountRepository.save(account);
            responseEntity = new ResponseEntity<>(HttpStatus.OK);
        }catch(HttpClientErrorException.BadRequest br){
            responseEntity = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            e.printStackTrace();
            responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
}
