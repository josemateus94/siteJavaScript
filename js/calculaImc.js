var arrayPaciente = document.querySelectorAll(".paciente");

validaPesoAltura(arrayPaciente);

function validaPesoAltura(pacientes) {
    pacientes.forEach(function (paciente) {
        var peso = paciente.querySelector(".info-peso").textContent;
        var altura = paciente.querySelector(".info-altura").textContent;
        if (peso > 0 && peso < 450) {
            if (altura > 0 && altura < 3) {
                paciente.querySelector(".info-imc").textContent = calculaImc(peso, altura);
            } else {
                paciente.querySelector(".info-imc").classList.add("erro");
                paciente.querySelector(".info-imc").textContent = "Altura Invalida";               
            }
        } else {            
            paciente.querySelector(".info-imc").classList.add("erro");
            paciente.querySelector(".info-imc").textContent = "Peso Invalido";
            if (!(altura > 0 && altura < 3)){
                paciente.querySelector(".info-imc").classList.add("erro");
                paciente.querySelector(".info-imc").textContent = "Peso e Altura Invalido";
            }
        }
    });   
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}


