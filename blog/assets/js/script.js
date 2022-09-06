
/*
por tag: getElementByTagName()
por Id: getElementById()
por nome: getElementsbyName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome  = window.document.getElementById ('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOk = false 
let assuntoOk = false 


nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length <= 2) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true 
    }
}

function validaEmail() {
let txtEmail = document.querySelector('#txtEmail')

if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'Email inválido'
    txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true 
    }
} 

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 2) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
       
        } else {
            txtAssunto.style.display = 'none'
            assuntoOk = true  
        }
    } 
 
    function enviar ()
    if (nomeOk == true && emailOk == true && assuntoOK == true) {
        alert ('Formulário enviado com sucesso')
        else {
            alert ('Preencha o formulário corretamente antes de enviar')
        }
    }