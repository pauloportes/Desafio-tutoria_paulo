/* global Given, Then, When, And */

import QuoteCarroPage from "../pageobjects/QuoteCarroPage";
const quoteCarroPage = new QuoteCarroPage();

Given("acesso o site da Tricentis", () => {
    quoteCarroPage.acessarSite();
});

And("clico no menu Automobile", () => {
    quoteCarroPage.clicarbuttonAutomobile();
});
