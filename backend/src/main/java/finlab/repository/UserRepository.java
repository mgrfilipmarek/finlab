package finlab.repository;

import finlab.data.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, String> {

    List<User> findAll();

    List<User> findByUserName(String username);

}
