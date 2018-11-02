package finlab.data;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "user", schema = "finlab_db")
@Data
public class User {

    @Id
    private String username;
    private String email;
    private String password;

    @Column(name = "create_time")
    private Date createTime;

}