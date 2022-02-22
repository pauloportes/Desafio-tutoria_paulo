Feature: Solicitar uma cotação de suguro de carro

    Background: Acessar o site da Tricentis
        Given acesso o site da Tricentis

    @testeum
    Scenario Outline: Enviar solicitação de orçamento de seguro de carro
        And clico no menu Automobile
        When seleciono a marca do carro
        And insiro a performace do motor
        And insiro a data de fabricação
        And seleciono o número de assentos
        And seleciono o tipo de combustível
        And insiro o preço do carro
        And insiro a placa do carro
        And insiro a quilometragem anual
        And e clico no botão next
        And insiro primeiro nome
        And insiro último nome
        And insiro a data de nascimento
        And seleciono gênero
        And insiro endereço
        And seleciono o país
        And insiro o Zip Code
        And insiro a cidade
        And seleciono a ocupação
        And seleciono um Hobbie
        And clico no botão next 2
        And insiro a data de início
        And seleciono a soma do seguro
        And seleciono o seguro de danos
        And seleciono Produtos opcionais
        And seleciono carro cortesia
        And clico no botão next 3
        And seleciono a opção Gold
        And clico no botão next 4
        And insiro e-mail
        And insiro fone
        And insiro usuario
        And insiro senha
        And insiro confirmação de senha
        And clico no botão enviar
        Then valido a mensagem de sucesso


        Examples:
            | cpf          | senha             | rede        | loja                   | url         |
            | 88412998863  | y4sb5xfrvnl@cr3dZ | SUISSA      | Itaquera               | suissa      |