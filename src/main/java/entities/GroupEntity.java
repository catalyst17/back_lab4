package main.java.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "GROUPS")
public class GroupEntity {
    public static final String USERS_GROUP = "users";

    @Id
    @Column(name="login", nullable = false, length = 30)
    private String login;

    @Column(name = "groupname", nullable = false, length = 30)
    private String groupname;

    public GroupEntity() {
    }

    public GroupEntity(String login, String groupname) {
        this.login = login;
        this.groupname = groupname;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public void setGroupname(String groupname) {
        this.groupname = groupname;
    }

    public String getLogin() {
        return login;
    }

    public String getGroupname() {
        return groupname;
    }
}
