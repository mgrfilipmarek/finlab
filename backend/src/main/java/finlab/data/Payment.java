package finlab.data;

import lombok.Data;

import javax.persistence.*;
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

    @ManyToOne
    @JoinColumn(name="user")
    private User user;

    @ManyToOne
    @JoinColumn(name="account")
    private Account account;

    @ManyToOne
    @JoinColumn(name="category")
    private Enumeration category;

}