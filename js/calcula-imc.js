function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura*altura)
    return imc.toFixed(2);
}

function validaPeso (peso){

    if (peso >= 0 && peso <= 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura (altura){
    if (altura > 0 && altura <= 3){
        return true;
    } else {
        return false;
    }
}

function resultadoImc (dado){

    var imc = dado;

    if( imc < 18.5 ){
        resultadoTd.textContent = ("Abaixo do peso");
        
    }

    if(imc >= 18.5 && imc <= 24.9){
        resultadoTd.textContent = ("Peso ideal");
    }

    if(imc >= 25 && imc <= 29.9){
        resultadoTd.textContent = ("Sobrepeso");
    }

    if(imc >= 30 && imc <= 34.9){
        resultadoTd.textContent = ("Obesidade grau 1");
    }

    if(imc >= 35 && imc <= 39.9){
        resultadoTd.textContent = ("Obesidade grau 2");
    }

    if(imc >= 40){
        resultadoTd.textContent = ("Obesidade grau 3");
    }
    return resultadoTd.textContent;
}

var pacientes = document.querySelectorAll(".paciente"); //querySeletorAll seleciona todos os pacientes (Array) da tabela

for (var i = 0; i < pacientes.length; i++) { //lenght apresenta o tamanho total do array

    var paciente = pacientes[i];
    var resultadoTd = paciente.querySelector(".info-resultado");

    var tdPeso = paciente.querySelector(".info-peso"); //a partir deste ponto passamos a usar o paciente.querySelector para filtrar às info dentro das classes
    var peso = tdPeso.textContent; //textContent para selecionar o conteúdo do campo da tabela
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var imcTd = paciente.querySelector(".info-imc");
    

    var pesoEhValido = validaPeso(peso); // variaveis de portas lógicas 
    var alturaEhValida = validaAltura(altura) // variaveis de portas lógicas
    
    var pacienteTr = document.querySelector(".paciente");

    
    if (!pesoEhValido) { //Operador condicional e lógico Booleano
        
        pesoEhValido = false;
        imcTd.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido"); // edição de estilo no Js usando arquivo externo CSS
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        imcTd.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {

        var imc = calculaImc(peso,altura);
        imcTd.textContent = imc;
        resultadoImc (imc);
    }
    
}








