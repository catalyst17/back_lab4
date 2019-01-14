package main.java.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@NamedQueries({
        @NamedQuery(name = "findUserById", query = "SELECT u FROM UserEntity u WHERE u.login = :login")
})
@Table(name = "USERS")
public class UserEntity implements Serializable {
    @Id
    @Column(name="login", nullable = false, length = 30)
    private String login;

    @Column(name="password", nullable = false, length = 40)
    private String password;

    public UserEntity() {
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserEntity)) return false;
        UserEntity that = (UserEntity) o;
        return login.equals(that.login) &&
                password.equals(that.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(login, password);
    }
}
