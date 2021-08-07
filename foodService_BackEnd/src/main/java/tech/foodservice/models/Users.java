package tech.foodservice.models;

import java.io.Serializable;
import javax.persistence.*;

@Entity
public class Users implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private Long id;
	private String name;
	private String lastName;
	private String email;
	private String phone;
	private String birthday;
	private String street;
	private int number;
	private String complement;
	private String district;
	private String cep;
	private String city;
	private String state;
	private String country;

	public Users(String name, String lastName, String email, String phone, String birthday, String street, int number, String cep, String complement, String district, String city, String state, String country) {
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.birthday = birthday;
		this.street = street;
		this.number = number;
		this.cep = cep;
		this.district = district;
		this.complement = complement;
		this.city = city;
		this.state = state;
		this.country = country;
	}

	public Users(){
		
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getComplement() {
		return complement;
	}

	public void setComplement(String complement) {
		this.complement = complement;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public Long getId(){
		return id;
	}

	public void setId(Long id){
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

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public String getStreet(){
		return street;
	}

	public void setStreet(String street){
		this.street = street;
	}

	public int getNumber(){
		return number;
	}

	public void setNumber(int number){
		this.number = number;
	}

	public String getCep(){
		return cep;
	}

	public void setCep(String cep){
		this.cep = cep;
	}

	public String getCity(){
		return city;
	}

	public void setCity(String city){
		this.city = city;
	}

	public String getState(){
		return state;
	}

	public void setState(String state){
		this.state = state;
	}

	public String getCountry(){
		return country;
	}

	public void setCountry(String country){
		this.country = country;
	}

	public String toString() {
		return  "Id: " + this.id + "\n" +
				"Name: " + this.name + "\n" +
				"LastName: " + this.lastName + "\n" +
				"Phone: " + this.phone + "\n" +
				"Email: " + this.email + "\n" +
				"Birthday: " + this.birthday + "\n" +
				"Street: " + this.street + "\n" +
				"Number: " + this.number + "\n" +
				"Cep: " + this.cep + "\n" +
				"City: " + this.city + "\n" +
				"State: " + this.state + "\n" +
				"Country: " + this.country + "\n";
	}

}


