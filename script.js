let cor1 = document.querySelector('.cor1')
let cor2 = document.querySelector('.cor2')
let botao = document.querySelector('.botao')
let resultado = document.querySelector('.resultado')

let att = document.createAttribute("style")
att.value = "background: yellow;"

cor1.addEventListener('click', trocaCor)
cor2.addEventListener('click', trocaCor)
botao.addEventListener('click', cheCk)

function trocaCor(){
    cor1.setAttributeNode(att)
    cor2.style.background = 'red'
    resultado.style.background = 'blue'
}


function cheCk(){
    if(cor1.style.background == 'yellow'){
        alert('OK')
    } else {
        return
    }
}
