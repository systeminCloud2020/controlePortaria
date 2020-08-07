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
    var res = confirm('Confirma?')
    if (res == true) {
        document.getElementById("checkImg").src = "img/checkListVerde.png";
    }
}