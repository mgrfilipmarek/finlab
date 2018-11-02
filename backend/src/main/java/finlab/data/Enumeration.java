package finlab.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "enumeration", schema = "finlab_db")
@Data
public class Enumeration {

    @Id
    @Column(name = "idenumeration")
    private Integer idEnumeration;

    private String value;

    @Column(name = "enumenum")
    private EnumEnum enumEnum;
    
}