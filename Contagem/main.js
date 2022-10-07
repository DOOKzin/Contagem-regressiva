'use strict'
var res = document.getElementById('res')

const formatarDigito = (digito) => `0${digito}`.slice(-2)

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos')
    const minutos = document.getElementById('minutos')
    const horas = document.getElementById('horas')
    const dias = document.getElementById('dias');


    const qtdSegundos = tempo % 60 
    const qtdMinutos = Math.floor((tempo % (60*60))/60)
    const qtdHoras = Math.floor((tempo % (60*60*24)) / (60*60))
    const qtdDias = Math.floor(tempo / (60 * 60 * 24))
    
    segundos.textContent = formatarDigito(qtdSegundos)
    minutos.textContent = formatarDigito(qtdMinutos)
    horas.textContent = formatarDigito(qtdHoras)
    dias.textContent = formatarDigito(qtdDias)

    if(qtdSegundos == '00' && qtdMinutos =='00' && qtdHoras == '00' && qtdDias == '00'){
        res.innerHTML = '<h1>Começou</h1>'
    }
}


const contagemRegresiva = (tempo) => {
    const paraContagem = () => clearInterval (id)

    const contar = () => {
        if (tempo == 0 ){
            paraContagem();
        }
        atualizar(tempo)
        tempo--        
    }
    const id = setInterval (contar, 1000)
}

const tempoRestante = () => {
    const dataEvento = new Date ('2022-10-07 12:55:00')
    const hoje = Date.now()
    return Math.floor((dataEvento - hoje) / 1000)
}

contagemRegresiva(tempoRestante())

