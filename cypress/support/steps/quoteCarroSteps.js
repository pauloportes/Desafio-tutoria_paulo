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

And("insiro a data de nascimento - {}", (birthDate) => {
    quoteCarroPage.inputDateBirth(birthDate);
});

And("seleciono gênero", () => {
    quoteCarroPage.CheckboxGender();
});

And("insiro endereço - {}", (streetAddress) => {
    quoteCarroPage.inputAddress(streetAddress);
});

And("seleciono o país - {}", (country) => {
    quoteCarroPage.selectCountry(country);
});

And("insiro o Zip Code - {}", (zipCode) => {
    quoteCarroPage.iptZipCode(zipCode);
});

And("insiro a cidade - {}", (city) => {
    quoteCarroPage.iptCity(city);
});

And("seleciono a ocupação - {}", (occupation) => {
    quoteCarroPage.selectOccupation(occupation);
});

And("seleciono um Hobbie", () => {
    quoteCarroPage.checkboxHobbies();
});

And("clico no botão next 2", () => {
    quoteCarroPage.clicarBtnNext2();
});

And("insiro a data de início - {}", (startDate) => {
    quoteCarroPage.iptStartDate(startDate);
});

And("seleciono a soma do seguro - {}", (insuranceSum) => {
    quoteCarroPage.selectInsurance(insuranceSum);
});

And("seleciono a Taxa de Mérito - {}", (meritRating) => {
    quoteCarroPage.selectMeritRating(meritRating);
});

And("seleciono o seguro de danos - {}", (damageInsurance) => {
    quoteCarroPage.selectDamageInsurance(damageInsurance);
});

And("seleciono Produtos opcionais", () => {
    quoteCarroPage.checkboxOptional();
});

And("seleciono carro cortesia - {}", (courtesyCar) => {
    quoteCarroPage.selectCourtesy(courtesyCar);
});

And("clico no botão next 3", () => {
    quoteCarroPage.clicarBtnNext3();
});

And("seleciono a opção Gold", () => {
    quoteCarroPage.checkGold();
});

And("clico no botão next 4", () => {
    quoteCarroPage.clicarBtnNext4();
});

And("insiro e-mail - {}", (email) => {
    quoteCarroPage.iptEmail(email);
});

And("insiro fone - {}", (phone) => {
    quoteCarroPage.iptPhone(phone);
});

And("insiro usuario - {}", (username) => {
    quoteCarroPage.iptUserName(username);
});

And("insiro senha - {}", (password) => {
    quoteCarroPage.iptPassword(password);
});

And("insiro confirmação de senha - {}", (confirmPassword) => {
    quoteCarroPage.iptConfirmPassword(confirmPassword);
});

And("clico no botão enviar", () => {
    quoteCarroPage.clicarSend();
});

Then("valido a mensagem de sucesso", () => {
    quoteCarroPage.modalSucesso();
});