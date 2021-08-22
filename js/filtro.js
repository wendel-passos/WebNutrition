var campoFiltro = document.querySelector("#filtra-tabela");

campoFiltro.addEventListener("input",function (){

    console.log (this.value ); // campo.value 

    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){

        for (var i= 0; i < pacientes.length; i++){

            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value , "i")// regExp é um método que filtra letras
            console.log(nome);
    
            if (!expressao.test(nome)){ // Se o nome digitado nao for o msm da expressao 

                paciente.classList.add("invisivel"); // add classe

            } else {

                paciente.classList.remove("invisivel"); // remove classe
            }
        }

    } else {
        
        for (var i= 0; i < pacientes.length; i++){

            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});

// pendente
var tatiana = document.querySelector("#tatiana")
tatiana.remove()