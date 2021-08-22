function adicionaPacienteNaTabela (paciente){

    var pacienteTr= montaTr(paciente);
   
    var tabela = document.querySelector("#tabela-pacientes"); // adc uma nova coluna na tabela de pacientes 
   
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros){

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "" // Manipula o que acontece na estrutura do HTML

    erros.forEach(function(erro){ // Outra forma de percorrer um array 

        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPaciente(form){ // Criançao de um objeto
    
    var paciente = {
        nome: form.nome.value, //.value retorna os valores inseridos em cada campo do input selecionado
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
        resultado: resultadoImc(calculaImc(form.peso.value, form.altura.value)),
    }
    return paciente;
}

function montaTd(dado, classe){

    var td= document.createElement("td");   // Cria um elemento no campo do HTML nesse caso são às td's
    td.textContent= dado;   // Passa todo o conteúdo dos dados inseridos para as variaveis
    td.classList.add (classe);

    return td;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr"); // Cria um elemento no campo do HTML nesse caso é uma tr;
    pacienteTr.classList.add("paciente"); // Cria uma classe para a 'tr'

    // Insere os dados nas td's filhos dentro da tr pai 
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));  
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd (paciente.imc, "info-imc"));
    pacienteTr.appendChild(montaTd(paciente.resultado,"info-resultado"));
    return pacienteTr;
}

function resultadoCor (dado){

    form = document.querySelector("#form-adiciona");    // seleciona o campo de formulario 
    paciente= obtemPaciente(form);
    var pacienteTr= montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    

    if(dado  < 18.5 ){
        pacienteTr.classList.add("paciente-peso-abaixo");
    }

    if(dado >= 18.5 && imc <= 24.9){
    
        pacienteTr.classList.add("paciente-ideal");
    }

    if(dado >= 25 && imc <= 29.9){
        pacienteTr.classList.add("paciente-sobrepeso");
    }

    if(dado >= 30 && imc <= 34.9){
        pacienteTr.classList.add("paciente-obesidade"); 
    }

    if(dado >= 35 && imc <= 39.9){
        pacienteTr.classList.add("paciente-obesidade");
    }

    if(dado >= 40){
        pacienteTr.classList.add("paciente-obesidade");
    }  

}

function validaPaciente(paciente) {

    var erros = []; // array

    // if simples ñ necessita de chaves

    if (paciente.nome.length == 0){
        erros.push("O campo nome deve ser preenchido")
    }

    if (paciente.gordura.length == 0){
        erros.push("O campo gordura deve ser preenchido")
    }

    if (paciente.peso.length == 0 || paciente.altura.length == 0 ){
        erros.push("O campo peso e altura deve ser preenchido")
    }

    if (!validaPeso (paciente.peso)){

        erros.push("Peso inválido "); // Adiciona valores dentro do array
    }

    if (!validaAltura (paciente.altura)){

        erros.push ("Altura inválida");
    }
    return erros;

}



var botao= document.querySelector("#adicionar-paciente")
botao.addEventListener("click", function (event){   // a funcao usada  nos parametros desse exemplo é anonima !
    event.preventDefault()  // essa funcao preventDefault é utilizada para anular o funcinamento padrao de um button de formularios
   
    var form = document.querySelector("#form-adiciona");    // seleciona o campo de formulario 
    var paciente= obtemPaciente(form);

    var erros  = validaPaciente(paciente)
    
    if (erros.length > 0 ){
        var mensagemErro = document.querySelector("#mensagem-erro")
        exibeMensagemDeErro(erros)
        return; 
    }


   var mensagensErro = document.querySelector("#mensagens-erro");
   mensagensErro.innerHTML= ""; // Limpa a ul apos a inserção do paciente na tabela
    //form.reset(); // Essa função reseta o formulario após o 'click'

    resultadoImc (paciente.imc);
    resultadoCor (paciente.imc);
    
    
});





