function calcular() {
const res = document.getElementById('tabela-imc')
const suaAltura = document.getElementById('altura').value
const seuPeso = document.getElementById('peso').value

let IMC = seuPeso / suaAltura**2

if (IMC < 18.5) {
    const container = document.createElement('div')
    const seuIMC = document.createElement('p')
    seuIMC.textContent = `Seu IMC é de ${IMC.toFixed(2)} e a classificação é Magreza`
    container.appendChild(seuIMC)
    res.appendChild(container)
} else if (IMC > 18.5 && IMC <= 24.9) {
    const container = document.createElement('div')
    const seuIMC = document.createElement('p')
    seuIMC.textContent = `Seu IMC é de ${IMC.toFixed(2)} e a classificação é Normal`
    container.appendChild(seuIMC)
    res.appendChild(container)
} else if (IMC > 25 && IMC <= 29.9) {
    const container = document.createElement('div')
    const seuIMC = document.createElement('p')
    seuIMC.textContent = `Seu IMC é de ${IMC.toFixed(2)} e a classificação é Sobrepeso`
    container.appendChild(seuIMC)
    res.appendChild(container)
} else if (IMC > 30 && IMC <= 34.9) {
    const container = document.createElement('div')
    const seuIMC = document.createElement('p')
    seuIMC.textContent = `Seu IMC é de ${IMC.toFixed(2)} e a classificação é Obesidade grau I`
    container.appendChild(seuIMC)
    res.appendChild(container)
} else if (IMC > 35 && IMC < 39.9) {
    const container = document.createElement('div')
    const seuIMC = document.createElement('p')
    seuIMC.textContent = `Seu IMC é de ${IMC.toFixed(2)} e a classificação é Obesidade grau II`
    container.appendChild(seuIMC)
    res.appendChild(container)
} else {
    const container = document.createElement('div')
    const seuIMC = document.createElement('p')
    seuIMC.textContent = `Seu IMC é de ${IMC.toFixed(2)} e a classificação é Obesidade grau III`
    container.appendChild(seuIMC)
    res.appendChild(container)
}
}