package tech.foodservice.models;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.persistence.*;

@Entity
public class Users implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, updatable = false)
	private long id;
	private String name;
	private String lastName;
	private String email;
	private String phone;
	private Date birthday;
	private Address address;

	public Users(String name, String lastName, String email, String phone, Date birthday, Address address){
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.birthday = birthday;
		this.address = address;
	}

	public long getId(){
		return id;
	}

	public void setId(long id){
		this.id = id;
	}

	public String getName(){
		return name;
	}

	public void setName(String name){
		this.name = name;
	}

	public String getLastName(){
		return lastName;
	}

	public void setLastName(String lastName){
		this.lastName = lastName;
	}

	public String getEmail(){
		return email;
	}

	public void setEmail(String email){
		this.email = email;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	private Address getAddress(){
		return this.address;
	}

	private void setAddress(Address address){
		this.address = address;
	}

	public String toString() {
		SimpleDateFormat data = new SimpleDateFormat("dd/MM/yyyy");

		return  "Id: " + this.id + "\n" +
				"Name: " + this.name + "\n" +
				"LastName: " + this.lastName + "\n" +
				"Phone: " + this.phone + "\n" +
				"Email: " + this.email + "\n" +
				"Birthday: " + data.format(birthday) + "\n" +
				"Address: " + this.address + "\n";
	}

}


