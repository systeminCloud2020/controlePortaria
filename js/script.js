//Função carrega dinamicamente cabeçalho
function criaImgLogin() {

var logo = document.createElement("div")
logo.innerHTML = '<img src="img/Logo.png" alt="logo"> <h1>Controle de Portaria</h1>'
document.getElementById('logo').appendChild(logo)

var manual = document.createElement('div')
manual.innerHTML = 'Manual do Sistema'
document.getElementById('manual').appendChild(manual)

var para = document.createElement("span");             
para.innerHTML = '<img src="img/login2.png" alt="Login / Logout" title="Login / Logout" onclick="abreLogin()">'; 
document.getElementById("imgLogin").appendChild(para); 

var select = document.createElement('select')
var options = [
    '<option value="Residencial Fiori">Residencial Fiori</option>',
    '<option value="José Bernardes">José Bernardes</option>',
    '<option value="Bosque das Acácias">Bosque das Acácias</option>'
]
select.innerHTML = options
document.getElementById('select').appendChild(select)
                
}

//Funçã aparece login
function abreLogin() {
    var login = document.getElementById('login')
    login.style.visibility='visible'
}

//Funçã desaparece login
function fechaLogin() {
    var login = document.getElementById('login')
    login.style.visibility='hidden'
}

//Função Logar
function logando() {
    idLogin = 'michel'
    idPassword = '123456'
    var user = document.getElementById('nameLogin').value
    var password = document.getElementById('password').value
    if (user == idLogin && password == idPassword) {
        document.querySelector('#user').style.display = "flex"

        var para = document.getElementById('imgLogin');             
        para.innerHTML = '<img src="img/loginVerde.png" alt="Login / Logout" title="Login / Logout">'; 
        
        return fechaLogin()
    } else {
        alert('Login e ou Senha incorretos!')
    }
}


//Função alerta de login
function loginNecessario() {
    alert('Necessário fazer login e preencher check list para ter acesso às funcionalidades do sistem!')
}

//Funções abre páginas
function openRegimento() {
    window.open('regimento.html')
}

function openManual() {
    window.open('manual.html')
}

function openOcorrencias() {
    window.open('ocorrencias.html')
}

function openCorreios() {
    window.open('correios.html')
}

function openVisitas() {
    window.open('visitas.html')
}

function openChaves() {
    window.open('chaves.html')
}

function openReservas() {
    window.open('reservas.html')
}

function openApartamentos() {
    window.open('apartamentos.html')
}

function openVeiculos() {
    window.open('veiculos.html')
}

function openMultas() {
    window.open('multas.html')
}

//Função valida check-list
function valida() {
    var res = confirm('Confirma check list?')
    if (res == true) {
        document.getElementById("checkImg").src = "img/checkListVerde.png"
        
        var x, i;
        x = document.querySelectorAll(".displayBlock");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }

        var x, i;
        x = document.querySelectorAll("#menu");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "flex";
        }
    }
}
