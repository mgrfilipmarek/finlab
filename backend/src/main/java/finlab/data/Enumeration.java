package finlab.data;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "enumeration", schema = "finlab_db")
@Data
public class Enumeration {

    @Id
    @Column(name = "idenumeration")
    private Integer idEnumeration;

    private String value;

    @ManyToOne
    @JoinColumn(name="enumenum")
    private EnumEnum enumEnum;
    
}