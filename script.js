function calcular() {
const res = document.getElementById('tabela-imc')
const suaAltura = parseFloat(document.getElementById('altura').value)
const seuPeso = parseFloat(document.getElementById('peso').value)


if (isNaN(suaAltura) || isNaN(seuPeso) || suaAltura <= 1.00 || suaAltura > 2.20 || seuPeso <= 0 || seuPeso >= 200) {
    alert("Digite número validos, siga os exemplos.")
    return
}

    let IMC = seuPeso / suaAltura**2
    let classificaçao;
    const container = document.createElement('div')
    container.classList.add('resultado-imc')

if (IMC < 18.5) {
    classificaçao = "Magreza"
    container.style.background = "linear-gradient(to right, #FFFF00, #a0df0c)"
} else if (IMC <= 24.9) {
    classificaçao = "Normal"
    container.style.background = "linear-gradient(to right, #00AF50, #78ffd6)"
} else if (IMC <= 29.9) {
    classificaçao = "Sobrepeso"
    container.style.background = "linear-gradient(to right, #F9BF8F, #6e5138)"
} else if (IMC <= 34.9) {
    classificaçao = "Obesidade grau I"
    container.style.background = "linear-gradient(to right, #FF9B09,rgb(163, 102, 10))"
} else if (IMC < 39.9) {
    classificaçao = "Obesidade grau II"
    container.style.background = "linear-gradient(to right, #FF3737,rgb(141, 6, 6))"
} else {
    classificaçao = "Obesidade grau III"
    container.style.background = "linear-gradient(to right, #FE0000, #FE0000)"
}
    
    const seuIMC = document.createElement('p')
    seuIMC.textContent = `Seu IMC é de ${IMC.toFixed(2)} e a classificação é ${classificaçao}`
    container.appendChild(seuIMC)

    const resultadoAnterior = document.querySelector('.resultado-imc')

    if (resultadoAnterior) {
        resultadoAnterior.remove()
    }

    res.appendChild(container)
}