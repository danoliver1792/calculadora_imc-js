const calcular = document.getElementById("calcular");

function imc() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
    const peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
    const resultado = document.getElementById("resultado");

    // verificando se os campos estao preenchidos
    if (nome !== "" && !isNaN(altura) && altura > 0 && !isNaN(peso)) {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        // classificacao do IMC
        let classificacao = "";

        if (valorIMC < 18.5) {
            classificacao = "abaixo do peso";
        } else if (valorIMC < 25) {
            classificacao = "com peso ideal";
        } else if (valorIMC < 30) {
            classificacao = "um pouco acima do peso";
        } else if (valorIMC < 35) {
            classificacao = "com obesidade grau 1";
        } else if (valorIMC < 40) {
            classificacao = "com obesidade grau 2";
        } else {
            classificacao = "com obesidade grau 3";
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC}, você está ${classificacao}`;

    } else {
        resultado.textContent = "Preencha todos os campos";
    }
}

calcular.addEventListener('click', imc);
