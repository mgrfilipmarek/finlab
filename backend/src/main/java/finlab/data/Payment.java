package finlab.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "payment", schema = "finlab_db")
@Data
public class Payment {

    @Id
    @Column(name = "idpayment")
    private Integer idPayment;

    private BigDecimal amount;

    @Column(name = "payment_time")
    private Date paymentTime;

    private boolean income;

    private User user;

    private Account account;

    private Enumeration category;

}