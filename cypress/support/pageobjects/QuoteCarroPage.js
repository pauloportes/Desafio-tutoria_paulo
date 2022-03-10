/// <reference types="Cypress" />

import QuoteCarroElements from "../elements/QuoteCarroElements";
const quoteCarroElements = new QuoteCarroElements();
const url = Cypress.config("baseUrl");

class QuoteCarroPage {
  // Acessa o site que será testado
  acessarSite() {
    cy.visit(url);
  }

  // Clica no botão da categoria carro
  clicarbuttonAutomobile() {
    cy.get(quoteCarroElements.buttonAutomobile()).click();
  }

  // Realiza os input da seção 'Make'
  iptMake(make) {
    cy.wait(4000);
    cy.get(quoteCarroElements.inputMake()).select(make);
  }

  // Realiza os input da seção 'Engine Performance'
  inputEngine(enginePerformance) {
    cy.get(quoteCarroElements.inputEnginePerformance()).click({ force: true });
    cy.get(quoteCarroElements.inputEnginePerformance()).type(enginePerformance);
  }

  // Realiza os input da seção 'Date of Manufacture'
  inputDateManu(dateOfManufacture) {
    cy.get(quoteCarroElements.inputDateOfManufacture()).click({ force: true });
    cy.get(quoteCarroElements.inputDateOfManufacture()).type(dateOfManufacture);
  }


  // Realiza os input da seção 'Number of Seats'
  inputNumberSeats(numberOfSeats) {
    cy.get(quoteCarroElements.inputNumberOfSeats()).select(numberOfSeats);
  }

  // Realiza os input da seção 'Fuel Type'
  inputFuel(fuel) {
    cy.get(quoteCarroElements.inputFuelType()).select(fuel);
  }

  // Realiza os input da seção 'List Price'
  inputPrice(listPrice) {
    cy.get(quoteCarroElements.inputListPrice()).click({ force: true });
    cy.get(quoteCarroElements.inputListPrice()).type(listPrice);
  }


  // Realiza os input da seção 'License Plate Number'
  inputLicense(licensePlateNumber) {
    cy.get(quoteCarroElements.inputLicensePlateNumber()).click({ force: true });
    cy.get(quoteCarroElements.inputLicensePlateNumber()).type(licensePlateNumber);
  }

  // Realiza os input da seção 'Annual Mileage'
  inputMileage(annualMileage) {
    cy.get(quoteCarroElements.inputAnnualMileage()).click({ force: true });
    cy.get(quoteCarroElements.inputAnnualMileage()).type(annualMileage);
  }

  // Clica no botão Next (Seção Enter Vehicle Data)
  clicarBtnNext1() {
    cy.get(quoteCarroElements.btnNext1()).click();
  }

  // Realiza os input da seção 'First Name'
  inputFirst(firstName) {
    cy.wait(3000);
    cy.get(quoteCarroElements.inputFirstName()).click({ force: true });
    cy.get(quoteCarroElements.inputFirstName()).type(firstName);
  }

  // Realiza os input da seção 'Last Name'
  inputLast(lastName) {
    cy.get(quoteCarroElements.inputLastName()).click({ force: true });
    cy.get(quoteCarroElements.inputLastName()).type(lastName);
  }

  // Realiza os input da seção 'Date of Nirth'
  inputDateBirth(birthDate) {
    cy.get(quoteCarroElements.inputDateOfBirth()).click({ force: true });
    cy.get(quoteCarroElements.inputDateOfBirth()).type(birthDate);
  }

  // Marca o checkbox do campo 'Gender'
  CheckboxGender() {
    cy.get(quoteCarroElements.checkGender()).click({ force: true });
  }

  // Realiza os input da seção 'Street Address'
  inputAddress(streetAddress) {
    cy.get(quoteCarroElements.inputStreetAddress()).click({ force: true });
    cy.get(quoteCarroElements.inputStreetAddress()).type(streetAddress);
  }

  // Realiza os input da seção 'Country'
  selectCountry(country) {
    cy.get(quoteCarroElements.inputCountry()).select(country);
  }

  // Realiza os input da seção 'Zip Code'
  iptZipCode(zipCode) {
    cy.get(quoteCarroElements.inputZipCode()).click({ force: true });
    cy.get(quoteCarroElements.inputZipCode()).type(zipCode);
  }

  // Realiza os input da seção 'City'
  iptCity(city) {
    cy.get(quoteCarroElements.inputCity()).click({ force: true });
    cy.get(quoteCarroElements.inputCity()).type(city);
  }

  // Realiza os input da seção 'Occupation'
  selectOccupation(occupation) {
    cy.get(quoteCarroElements.inputOccupation()).select(occupation);
  }

  // Marca o checkbox do campo 'Hobbies'
  checkboxHobbies() {
    cy.get(quoteCarroElements.checkHobbies()).click({ force: true });
  }

  // Clica no botão Next (Seção Enter Insurance Data)
  clicarBtnNext2() {
    cy.get(quoteCarroElements.btnNext2()).click();
  }

  // Realiza os input da seção 'Start Dte'
  iptStartDate(startDate) {
    cy.wait(3000);
    cy.get(quoteCarroElements.inputStartDate()).click({ force: true });
    cy.get(quoteCarroElements.inputStartDate()).type(startDate);
  }

  // Realiza os input da seção 'Insurance Sum'
  selectInsurance(insuranceSum) {
    cy.get(quoteCarroElements.inputInsuranceSum()).select(insuranceSum);
  }

  // Realiza os input da seção 'Merit Rating'
  selectMeritRating(meritRating) {
    cy.get(quoteCarroElements.inputMeritRating()).select(meritRating);
  }

  // Realiza os input da seção 'Damage Insurance'
  selectDamageInsurance(damageInsurance) {
    cy.get(quoteCarroElements.inputDamageInsurance()).select(damageInsurance);
  }

  // Marca o checkbox do campo 'Optional Products'
  checkboxOptional() {
    cy.get(quoteCarroElements.checkOptionalProducts()).click({ force: true });
  }

  // Realiza os input da seção 'Courtesy Car'
  selectCourtesy(courtesyCar) {
    cy.get(quoteCarroElements.inputCourtesyCar()).select(courtesyCar);
  }

  // Clica no botão Next (Seção Enter Product Data)
  clicarBtnNext3() {
    cy.get(quoteCarroElements.btnNext3()).click();
  }

  // Marca o checkbox do campo 'Optional Products'
  checkGold() {
    cy.wait(3000)
    cy.get(quoteCarroElements.btnGold()).click({ force: true });
  }

  // Clica no botão Next (Seção Select Price Option)
  clicarBtnNext4() {
    cy.get(quoteCarroElements.btnNext4()).click();
  }

  // Realiza os input da seção 'E-Mail'
  iptEmail(email) {
    cy.wait(3000);
    cy.get(quoteCarroElements.inputEmail()).click({ force: true });
    cy.get(quoteCarroElements.inputEmail()).type(email);
  }

  // Realiza os input da seção 'Phone'
  iptPhone(phone) {
    cy.get(quoteCarroElements.inputPhone()).click({ force: true });
    cy.get(quoteCarroElements.inputPhone()).type(phone);
  }

  // Realiza os input da seção 'Username'
  iptUserName(username) {
    cy.get(quoteCarroElements.inputUsername()).click({ force: true });
    cy.get(quoteCarroElements.inputUsername()).type(username);
  }

  // Realiza os input da seção 'Password'
  iptPassword(password) {
    cy.get(quoteCarroElements.inputPassword()).click({ force: true });
    cy.get(quoteCarroElements.inputPassword()).type(password);
  }

  // Realiza os input da seção 'Confirm Password'
  iptConfirmPassword(confirmPassword) {
    cy.get(quoteCarroElements.inputConfirmPassword()).click({ force: true });
    cy.get(quoteCarroElements.inputConfirmPassword()).type(confirmPassword);
  }

  // Clica no botão Send
  clicarSend() {
    cy.wait(5000);
    cy.xpath("//*[@id='sendemail']").click({ force: true });
    //cy.get(quoteCarroElements.btnSend()).click({ force: true });
  }

  modalSucesso() {
    cy.wait(5000);
    cy.wait(quoteCarroElements.msgEmailEnviado ()).should();
  } //h2[contains(text(), 'Sending e-mail success!')]

}

export default QuoteCarroPage;
