package finlab.controller;

import finlab.repository.EnumerationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/enumeration")
public class EnumerationController {

    @Autowired
    EnumerationRepository repo;

    @RequestMapping("/all")
    public List enumerationAll(@RequestParam Integer id) {
        return repo.findAllByEnumEnum_IdEnumEnum(id);
    }

}