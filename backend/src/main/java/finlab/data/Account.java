package finlab.data;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "account", schema = "finlab_db")
@Data
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idaccount")
    private Long idAccount;

    private String description;
    private BigDecimal amount;
    private Enumeration type;

}