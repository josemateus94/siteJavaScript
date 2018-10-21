
var botaoAdicionar = document.querySelector("#adicionar-paciente");
console.log(botaoAdicionar);
botaoAdicionar.addEventListener("click", function (event) {
    var tabela = document.querySelector("#tabela-pacientes");
    var form = document.querySelector("#formAdiciona");
    event.preventDefault();
    var paciente = mostarPaciente(form);
    
    /*PARA PERCORRER UM OBJETO*/
    /*for(var t in paciente){
        console.log(paciente[t]);
    }*/

    var arrayErro = validaPaciente(paciente);
    if (mensagemErro(arrayErro)) {/*Algum dados não foi preenchido/informado corretamente*/
        tabela.appendChild(montarTr(paciente));
        form.reset();
    }
});

function mostarPaciente(form) {
    var paciente = {
        nome: textContent = form.querySelector("#nome").value,
        peso: textContent = form.querySelector("#peso").value,
        altura: textContent = form.querySelector("#altura").value,
        gordura: textContent = form.querySelector("#gordura").value,
        imc: textContent = calculaImc(form.peso.value, form.altura.value)
    };
    return paciente;
}

function montarTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function montarTr(paciente) {
    var tr = document.createElement("tr");
    tr.classList.add("paciente");
    tr.appendChild(montarTd(paciente.nome, "info-nome"));
    tr.appendChild(montarTd(paciente.peso, "info-peso"));
    tr.appendChild(montarTd(paciente.altura, "info-altura"));
    tr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    tr.appendChild(montarTd(paciente.imc, "info-imc"));
    return tr;
}

function montarLi(erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    return li;
}

function validaPaciente(paciente) {
    var erro = [];
    if (!paciente.nome.length > 0) {
        erro.push("Nome em branco");
    }
    if (!paciente.peso.length > 0) {
        erro.push("Peso em branco");
    } else if (!(paciente.peso > 0 && paciente.peso < 450)) {
        erro.push("peso Incorreto");
    }
    if (!paciente.altura.length > 0) {
        erro.push("Altura em branco");
    } else if (!(paciente.altura > 0 && paciente.altura < 3)) {
        erro.push("Altura incorreta");
    }
    if (!paciente.gordura.length > 0) {
        erro.push("Gordura em branco");
    }
    return erro;
};

function mensagemErro(arrayErro) {
    var ul = document.querySelector(".mensagemErro");
    ul.innerHTML = "";
    if (arrayErro.length > 0) {
        arrayErro.forEach(function (erro) {
            ul.appendChild(montarLi(erro));
        });
        return false;
    } else {
        return true;
    }
}
