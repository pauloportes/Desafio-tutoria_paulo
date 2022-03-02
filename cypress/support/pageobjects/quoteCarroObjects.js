/// <reference types="Cypress" />

import QuoteCarroElements from "../elements/QuoteCarroElements";
const quoteCarroElements = new QuoteCarroElements();
const url = Cypress.config("baseUrl");

class QuoteCarroPage {
  // Acessa o site que será testado
  acessarSite() {
    cy.visit(url);
  }

  // Realiza os inputs da seção 'Enter Vehicle Data'
  inputLoginCpf(cpf) {
    cy.get(quoteCarroElements.inputMake()).click({ force: true });
    cy.get(quoteCarroElements.inputMake()).type(cpf);
  }

   clicarLogin() {
    cy.get(backOfficeElements.btnLogin()).click();
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
