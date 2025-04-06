#utf-8
#language: pt

Funcionalidade: registrarCarro-01 - Registro em Automobile
    Cenário: Registrar Carro
        Dado estou na pagina home do Portal Tricentis
        E clico no botão Automobile validando o mesmo
        Quando preencho o Vehicle Data com dados validos
        E clico no botão Next para avançar à proxima aba
        E preencho todo o Insurant Data
        E preencho o Product Data
        E seleciono o Plano de seguro
        E clico no botão Next
        Então preencho o Formulario Final
        E valido o comentario enviado