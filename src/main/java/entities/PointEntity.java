package main.java.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "POINT")
@NamedQuery(
        name = "pointlist",
        query = "SELECT p FROM PointEntity p WHERE p.owner = :creator ORDER BY p.creationDate DESC")
public class PointEntity implements Serializable {

    @Id
    @Column(name = "x")
    private double x;

    @Id
    @Column(name = "y")
    private double y;

    @Id
    @Column(name = "r")
    private double r;

    @Column(name = "inrange")
    private boolean inRange;

    @Id
    @Column(name = "time")
    @Temporal(TemporalType.TIMESTAMP)
    private Date creationDate;

    @ManyToOne
    @JoinColumn(name="owner")
    private UserEntity owner;

    public PointEntity() {
    }

    public PointEntity(Date creationDate) {
        this.creationDate = creationDate;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public boolean isInRange() {
        return inRange;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public UserEntity getOwner() {
        return owner;
    }

    public void setX(double x) {
        this.x = x;
    }

    public void setY(double y) {
        this.y = y;
    }

    public void setR(double r) {
        this.r = r;
    }

    public void setInRange(boolean inRange) {
        this.inRange = inRange;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public void setOwner(UserEntity owner) {
        this.owner = owner;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PointEntity)) return false;
        PointEntity that = (PointEntity) o;
        return Double.compare(that.x, x) == 0 &&
                Double.compare(that.y, y) == 0 &&
                Double.compare(that.r, r) == 0 &&
                inRange == that.inRange &&
                creationDate.equals(that.creationDate) &&
                owner.equals(that.owner);
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y, r, inRange, creationDate, owner);
    }

    @Override
    public String toString() {
        return "PointEntity{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", inRange=" + inRange +
                '}';
    }
}
