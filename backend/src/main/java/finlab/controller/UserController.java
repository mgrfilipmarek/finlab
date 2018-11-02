package finlab.controller;

import finlab.data.User;
import finlab.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserRepository repo;

    @RequestMapping("/all")
    public List usersAll() {
        return repo.findAll();
    }

    @RequestMapping(value="/detail", method= RequestMethod.GET)
    public List<User> userUserName(@RequestParam String username){
        return repo.findByUserName(username);
    }

}