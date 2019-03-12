package finlab.controller;

import finlab.data.Account;
import finlab.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/account")
public class AccountController {

    @Autowired
    private AccountRepository repo;

    @RequestMapping("/all")
    public List accountAll() {
        return repo.findAll();
    }

    @PostMapping
    public boolean addAccount(@RequestBody Account account) {
        repo.save(account);
        return true;
    }

}
