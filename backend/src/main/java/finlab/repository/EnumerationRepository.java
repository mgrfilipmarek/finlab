package finlab.repository;

import finlab.data.Enumeration;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EnumerationRepository extends CrudRepository<Enumeration, Integer> {

    List<Enumeration> findAllByEnumEnum_IdEnumEnum(Integer id);

}
