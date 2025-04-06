#utf-8
#language: pt

Funcionalidade: registrarCarro-01 - Registro Negativo em Automobile
    Cenário: Tentativa de registrar carro com campo em Branco
        Dado estou na pagina home do Portal Tricentis
        E clico no botão Automobile validando o mesmo
        Quando preencho o Vehicle Data deixando o campo Engine Performance em branco
        E clico no botão Next para avançar à proxima aba
        E preencho todo o Insurant Data
        E preencho o Product Data
        Então valido que é necessario preencher todos os campos para prosseguir