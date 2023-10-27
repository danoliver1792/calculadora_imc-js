const calcular = document.getElementById("calcular");

function imc() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
    const peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
    const resultado = document.getElementById("resultado");

    // verificando se os campos estao preenchidos
    if (nome !== "" && !isNaN(altura) && altura > 0 && !isNaN(peso)) {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        resultado.textContent = `IMC: ${valorIMC}`;

    } else {
        resultado.textContent = "Preencha todos os campos";
    }
}

calcular.addEventListener('click', imc);
