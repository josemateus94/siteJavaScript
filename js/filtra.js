
var filtra = document.querySelector("#pesquisa");
filtra.addEventListener("input", function () {
    var arrayPaciente = document.querySelectorAll(".paciente");
    arrayPaciente.forEach(function (paciente) {
        var nome = paciente.querySelector(".info-nome").textContent;
        if (filtra.value.length > 0) {
            var expressao = new RegExp(filtra.value, "i");
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        } else {
            paciente.classList.remove("invisivel");
        }
    });
});




