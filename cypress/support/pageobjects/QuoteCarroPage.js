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


  // Desmarca o checkbox de arquuivo unico para toda rede
  clicarCheckbox() {
    cy.get(backOfficeElements.checkboxArquivoUnico()).click({ force: true });
  }

  modalSucesso() {
    cy.wait(backOfficeElements.msgSucessoNovoRegistro());
  }

}

export default QuoteCarroPage;
