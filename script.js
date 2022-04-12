/*let cor1 = document.querySelector('.cor1')
let cor2 = document.querySelector('.cor2')
let botao = document.querySelector('.botao')
let resultado = document.querySelector('.resultado')

let att = document.createAttribute("style")
att.value = "background: yellow;"

let result = document.createAttribute("style")
result.value = "backgorund: yellow"

cor1.addEventListener('click', trocaCor)
cor2.addEventListener('click', trocaCor)
botao.addEventListener('click', cheCk)

function trocaCor(){
    cor1.setAttributeNode(att)
    cor2.style.background = 'red'
    
}


function cheCk(){
    if(cor1.style.background == 'blue'  && cor2.style.background == 'blue' && botao.style.background == 'yellow'){
        resultado.setAttribute(result)
    } else {
        alert('Hey! Look Again!')
    }
}*/

let cor1 = document.querySelector('.cor1')
let cor2 = document.querySelector('.cor2')
let cor3 = document.querySelector('.cor3')
let cor4 = document.querySelector('.cor4')

cor1.addEventListener('click', trocaCor)

function trocaCor() {   

    if(cor1.style.background === 'blue')
        cor1.style.background = 'red'
    else if(cor1.style.background === 'red')
        cor1.style.background = 'green'
    else if(cor1.style.background === 'green')
        cor1.style.background = 'yellow'
    else 
        cor1.style.background = 'blue'  

}

cor2.addEventListener('click', trocaCor2)

function trocaCor2() {   

    if(cor2.style.background === 'blue')
        cor2.style.background = 'red'
    else if(cor2.style.background === 'red')
        cor2.style.background = 'green'
    else if(cor2.style.background === 'green')
        cor2.style.background = 'yellow'
    else 
        cor2.style.background = 'blue'  

}

cor3.addEventListener('click', trocaCor3)

function trocaCor3() {   

    if(cor3.style.background === 'blue')
        cor3.style.background = 'red'
    else if(cor3.style.background === 'red')
        cor3.style.background = 'green'
    else if(cor3.style.background === 'green')
        cor3.style.background = 'yellow'
    else 
        cor3.style.background = 'blue'  

}

cor4.addEventListener('click', trocaCor4)

function trocaCor4() {   

    if(cor4.style.background === 'blue')
        cor4.style.background = 'red'
    else if(cor4.style.background === 'red')
        cor4.style.background = 'green'
    else if(cor4.style.background === 'green')
        cor4.style.background = 'yellow'
    else 
        cor4.style.background = 'blue'  

}

let check = document.querySelector('.botao')

check.addEventListener('click', cheCar)

function cheCar(){

    if(
        cor1.style.background === 'blue' &&
        cor2.style.background === 'blue' &&
        cor3.style.background === 'yellow' &&
        cor4.style.background === 'yellow'    
    
    )

    alert('Good Job! Please, Stop the War!')

    else 

    alert('Please, Try Again!')
}

