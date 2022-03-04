/* global Given, Then, When, And */

import QuoteCarroPage from "../pageobjects/QuoteCarroPage";
const quoteCarroPage = new QuoteCarroPage();

Given("acesso o site da Tricentis", () => {
    quoteCarroPage.acessarSite();
});

And("clico no menu Automobile", () => {
    quoteCarroPage.clicarbuttonAutomobile();
});

When("seleciono a marca do carro - {}", (make) => {
    quoteCarroPage.iptMake(make);
});

And("insiro a performace do motor - {}", (enginePerformance) => {
    quoteCarroPage.inputEngine(enginePerformance);
});

And("insiro a data de fabricação - {}", (dateOfManufacture) => {
    quoteCarroPage.inputDateManu(dateOfManufacture);
});

And("seleciono o número de assentos - {}", (numberOfSeats) => {
    quoteCarroPage.inputNumberSeats(numberOfSeats);
});

And("seleciono o tipo de combustível - {}", (fuel) => {
    quoteCarroPage.inputFuel(fuel);
});

And("insiro o preço do carro - {}", (listPrice) => {
    quoteCarroPage.inputPrice(listPrice);
});

And("insiro a placa do carro - {}", (licensePlateNumber) => {
    quoteCarroPage.inputLicense(licensePlateNumber);
});

And("insiro a quilometragem anual - {}", (annualMileage) => {
    quoteCarroPage.inputMileage(annualMileage);
});

And("e clico no botão next", () => {
    quoteCarroPage.clicarBtnNext1();
});

And("insiro primeiro nome - {}", (firstName) => {
    quoteCarroPage.inputFirst(firstName);
});

And("insiro último nome - {}", (lastName) => {
    quoteCarroPage.inputLast(lastName);
});


Then("seleciono a marca do carro ", () => {
    quoteCarroPage.iptMake();
});