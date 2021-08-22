var tabela = document.querySelector("table");


tabela.addEventListener("dblclick", function(event){

    if (event.target.tagName == 'TD') { // Se o evento capturado for uma 'td'

        event.target.parentNode.classList.add("remove-paciente"); // parentNode remove o filho do HTML
        setTimeout(function(){ // setTimeout aguarda o tempo determinado para executar a proxima linha de comando 
        
            event.target.parentNode.remove();
    
        },400)// '500' milisegundos de espera
    }


    
    

});

// pacientes.forEach(function(paciente){

    //paciente.addEventListener("dblclick", function(){

        //this.remove(); // this é uma palavra reservado e refere-se ao "paciente" dono do evento 
    //})
// })





