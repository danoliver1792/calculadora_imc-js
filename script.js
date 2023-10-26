const calcular = document.getElementById("calcular");

function imc() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    // verificando se os campos estao preenchidos
    if (nome.value !== "" && altura !== "" && peso !== "") {
        alert("preenchido");
    } else {
        resultado.textContent = "Preencha todos os campos";
    }
}

calcular.addEventListener('click', imc);
