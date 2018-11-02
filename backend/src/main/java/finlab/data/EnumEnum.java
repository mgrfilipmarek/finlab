package finlab.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "enumenum", schema = "finlab_db")
@Data
public class EnumEnum {

    @Id
    @Column(name = "idenumenum")
    private Integer idEnumEnum;

    private String code;

}