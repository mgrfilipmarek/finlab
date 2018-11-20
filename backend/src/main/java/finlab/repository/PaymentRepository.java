package finlab.repository;

import finlab.data.Payment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface PaymentRepository extends CrudRepository<Payment, Integer> {

    List<Payment> findAll();

    @Query(value = "SELECT * FROM payment as p " +
            "WHERE 1=1 " +
            "AND p.payment_time >= date(now()) - ?1", nativeQuery = true)
    List<Payment> findLastDays(int d);

    List<Payment> findAllByPaymentTimeAfter(Date d);

}
