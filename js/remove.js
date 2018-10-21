var remove = document.querySelector("#tabela-pacientes");
remove.addEventListener("dblclick", function (event) {
    var verifica = confirm("Deseja deletar? ");
    if (verifica) {
        event.target.parentNode.classList.add("remove");
        event.target.parentNode.addEventListener("transitionend", function () {
            event.target.parentNode.remove();
            console.log("ola mundo");
        });
    }
});


