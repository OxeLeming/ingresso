//Selecionar tipo de ingresso e a quantidade
function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let quantiaDisponivel = document.getElementById("qtd-" + tipoIngresso);
    let disponibilidade = parseInt(quantiaDisponivel.textContent);

    switch (tipoIngresso) {
        case "inferior":
        case "superior":
        case "pista":
            comparar(tipoIngresso, quantidade, quantiaDisponivel, disponibilidade);
            break;
    }
}


function comparar(tipoIngresso, quantidade, quantiaDisponivel, disponibilidade) {

    if (disponibilidade > 0) {
        disponibilidade -= quantidade
        if (disponibilidade <= -1) {
            alert(`Número de ingressos ultrapassa a quantidade disponível`);
        } else {
            quantiaDisponivel.textContent = disponibilidade;
        }
    } else {
        alert(`Ingressos do tipo ${tipoIngresso} foram esgotados`)
    }
}