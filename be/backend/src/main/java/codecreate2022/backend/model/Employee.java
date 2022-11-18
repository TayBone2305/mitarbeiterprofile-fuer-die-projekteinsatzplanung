package codecreate2022.backend.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Employee implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private int id;
    private String picture;
    private String firstName;
    private String lastName;
    private String mail;
    private String phoneNumber;
    private String role;
    private Date memberSince;
    private Date availableFrom;

    public Date getAvailableFrom() {
        return availableFrom;
    }

    public void setAvailableFrom(Date availableFrom) {
        this.availableFrom = availableFrom;
    }

    @ElementCollection
    private List<String> skills = new ArrayList<>();

    public Employee(String picture, String firstName, String lastName, String mail, String phoneNumber, String role, Date memberSince, Date availableFrom, List<String> skills) {
        this.picture = picture;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.memberSince = memberSince;
        this.availableFrom = availableFrom;
        this.skills = skills;
    }

    public Employee() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Date getMemberSince() {
        return memberSince;
    }

    public void setMemberSince(Date memberSince) {
        this.memberSince = memberSince;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }
}
