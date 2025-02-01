function calcular() {
const res = document.getElementById('resultado-imc')
const dica = document.getElementById('dicas')
const suaAltura = parseFloat(document.getElementById('altura').value)
const seuPeso = parseFloat(document.getElementById('peso').value)



if (isNaN(suaAltura) || isNaN(seuPeso) || suaAltura <= 0 || suaAltura > 2.20 || seuPeso <= 0 || seuPeso >= 200 || !suaAltura || !seuPeso) {
    alert("Por favor, insira números válidos. Exemplos: Altura (1.93) e Peso (99). Altura entre 1.00 e 2.20 metros e Peso entre 0 e 200 kg.")
    return
}

    let IMC = seuPeso / suaAltura**2
    let classificacao;

if (IMC < 18.5) {
    classificacao = "Magreza"
    if (window.innerWidth >= 1024) {
        dica.style.display = 'flex'
    }
} else if (IMC <= 24.9) {
    classificacao = "Normal"
    dica.style.display = 'none'
} else if (IMC <= 29.9) {
    classificacao = "Sobrepeso"
    if (window.innerWidth >= 1024) {
        dica.style.display = 'flex'
    }
} else if (IMC <= 34.9) {
    classificacao = "Obesidade grau I"
    if (window.innerWidth >= 1024) {
        dica.style.display = 'flex'
    }
} else if (IMC < 39.9) {
    classificacao = "Obesidade grau II"
    if (window.innerWidth >= 1024) {
        dica.style.display = 'flex'
    }
} else {
    classificacao = "Obesidade grau III"
    if (window.innerWidth >= 1024) {
        dica.style.display = 'flex'
    }
}
    res.style.display = 'block'
    res.innerHTML = '';
    res.innerHTML = `<p>Seu IMC é de <strong>${IMC.toFixed(2)}</strong> e a classificação é <strong>${classificacao}</strong></p>`
}

function verificarTamanhoTela() {
    const dica = document.getElementById('dicas')
    if (window.innerWidth < 1024) {
        dica.style.display = 'none'
    }
}

window.addEventListener('resize', verificarTamanhoTela)