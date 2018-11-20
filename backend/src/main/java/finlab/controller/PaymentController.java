package finlab.controller;

import finlab.data.Payment;
import finlab.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentRepository repo;

    @RequestMapping("/all")
    public List paymentAll() {
        return repo.findAll();
    }

    @RequestMapping("/last")
    public List<Payment> lastPayments(@RequestParam int days) {
//        return repo.findLastDays(days);
        LocalDate ld = LocalDate.now();
        ld = ld.minusDays((long)days);
        return repo.findAllByPaymentTimeAfter(Date.valueOf(ld));
    }

}