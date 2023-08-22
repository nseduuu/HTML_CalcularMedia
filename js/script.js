let aprovado = 0
let reprovado = 0
let aprovadoporexame = 0 
let reprovadoporexame = 0

function calculo(v1, v2){
    
    /*input = document.getElementById ('teste');
    teste.innerHTML = "funcionando" + result;*/

    if(v1 >= 0 && v1 <= 10 && v2 >= 0 && v2 <= 10){
        result = (parseFloat(v1)+parseFloat(v2)) / 2;
        if(result >= 7){
            aprovado++
            alert("Aprovado!")
        }
        else if(result >= 4 && result < 7){
            alert("Exame!")
            v3 = prompt("Digite uma terceira nota: ")
            result = (result + parseFloat(v3)) / 2

            if(result >= 5){
                aprovadoporexame++
                alert("Aprovado por exame!")
            }

            if(result < 5){
                reprovadoporexame++
                alert("Reprovado por exame!")
            }
        }    
        else{
            reprovado++
            alert("Reprovado!")
        }
        
        input= document.getElementById ('Aprovado')
        input.innerHTML = "Aprovado: " + aprovado 

        input= document.getElementById ('Aprovado por exame')
        input.innerHTML = "Aprovado por exame: " + aprovadoporexame 

        input= document.getElementById ('Reprovado')
        input.innerHTML = "Reprovado: " + reprovado

        input= document.getElementById ('Reprovado por exame')
        input.innerHTML = "Reprovado por exame: " + reprovadoporexame 
        
    }
    else{
        alert("Nota(s) invalida(s)!")
    }

    return (result);
}

function limpa(){

    let aprovado = 0
    let reprovado = 0
    let aprovadoporexame = 0 
    let reprovadoporexame = 0
    result=""

    input= document.getElementById ('Aprovado')
    input.innerHTML = "Aprovado: " + aprovado 

    input= document.getElementById ('Aprovado por exame')
    input.innerHTML = "Aprovado por exame: " + aprovadoporexame 

    input= document.getElementById ('Reprovado')
    input.innerHTML = "Reprovado: " + reprovado

    input= document.getElementById ('Reprovado por exame')
    input.innerHTML = "Reprovado por exame: " + reprovadoporexam

    return  result;
}