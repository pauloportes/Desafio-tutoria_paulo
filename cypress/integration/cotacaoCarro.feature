Feature: Solicitar uma cotação de suguro de carro

    Background: Acessar o site da Tricentis
        Given acesso o site da Tricentis

    @testeum
    Scenario Outline: Enviar solicitação de orçamento de seguro de carro
        And clico no menu Automobile
        When seleciono a marca do carro - <make>
        And insiro a performace do motor - <enginePerformance>
        And insiro a data de fabricação - <dateOfManufacture>
        And seleciono o número de assentos - <numberOfSeats>
        And seleciono o tipo de combustível - <fuel>
        And insiro o preço do carro - <listPrice>
        And insiro a placa do carro - <licensePlateNumber>
        And insiro a quilometragem anual - <annualMileage>
        And e clico no botão next
        And insiro primeiro nome - <firstName>
        And insiro último nome - <lastName>
        And insiro a data de nascimento - <birthDate>
        And seleciono gênero
        And insiro endereço - <streetAddress>
        And seleciono o país - <country>
        And insiro o Zip Code - <zipCode>
        And insiro a cidade - <city>
        And seleciono a ocupação - <occupation>
        And seleciono um Hobbie
        And clico no botão next 2
        And insiro a data de início - <startDate>
        And seleciono a soma do seguro - <insuranceSum>
        And seleciono a Taxa de Mérito - <meritRating>
        And seleciono o seguro de danos - <damageInsurance>
        And seleciono Produtos opcionais
        And seleciono carro cortesia - <courtesyCar>
        And clico no botão next 3
        And seleciono a opção Gold
        And clico no botão next 4
        And insiro e-mail - <email>
        And insiro fone - <phone>
        And insiro usuario - <username>
        And insiro senha - <password>
        And insiro confirmação de senha - <confirmPassword>
        And clico no botão enviar
        Then valido a mensagem de sucesso


        Examples:
            | make    | enginePerformance | dateOfManufacture | numberOfSeats | fuel    | listPrice | licensePlateNumber | annualMileage  | firstName  | lastName | birthDate  | streetAddress         | country | zipCode | city      | occupation | startDate  | insuranceSum  | meritRating | damageInsurance | courtesyCar | email            | phone       | username | password | confirmPassword  |
            | Porsche | 200               | 05/12/2018        | 5             | Petrol  | 25000     | 123                | 200           | Peter       | Williams | 05/08/1989 | Great Street number 2 | Albania | 5555    | Test City | Employee   | 05/05/2022 | 3.000.000,00  | Bonus 5     | No Coverage     | Yes         | test@test.com.br | 55819898989 | teste    | Test123  | Test123          |