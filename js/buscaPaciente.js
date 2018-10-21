
var carregar = document.querySelector("#carregar");
carregar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function () {        
        var arrayPaciente = JSON.parse(xhr.responseText);             
        arrayPaciente.forEach(function(paciente){
           var pacienteTr = montarTr(paciente);
           var tabela = document.querySelector("#tabela-pacientes");
           tabela.appendChild(pacienteTr);
        });        
    });
    xhr.send();
});



