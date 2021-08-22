var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function (){ // escutado de evento para executar a função anônima

    // console.log ("click no botao");

    var xhr = new XMLHttpRequest (); // a varivel equivale a uma nova requisição Http

    xhr.open ("GET", "http://api-pacientes.herokuapp.com/pacientes"); // "GET" é o método e o segundo parâmetro é a URL que será carregada
    
    xhr.addEventListener ("load" , function(){ // load carrega o conteúdo da página 

        if (xhr.status == 200){
             //console.log(xhr.responseText); // Mostra a resposta do conteúdo de texto da URL
            var resposta = xhr.responseText;
            //console.log (resposta);
            // console.log(typeof resposta ); // espesifica o tipo de dado que o conteúdo apresenta

            var pacientes = JSON.parse(resposta); // traduz o conteúdo JSON da URL em um objeto JS
            // console.log (pacientes);
            // console.log (typeof pacientes);

            //for (i = 0; pacientes.length; i++){

                //adicionaPacienteNaTabela(pacientes[i]);
            //}
            
            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente);
                
                if (imc > 0){
                    resultadoTd.textContent = ("Obesidade grau 1");
                }
            


            });

        }else{
            var erroAjax= document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
            console.log (xhr.status);
            console.log (xhr.responseText);
        }
       
 
    });

    xhr.send (); // envia o endereço da URL que será carregada

});