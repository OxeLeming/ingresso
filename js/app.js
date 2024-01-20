//Selecionar tipo de ingresso e a quantidade
function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let quantiaDisponivel = document.getElementById("qtd-" + tipoIngresso);
    let disponibilidade = parseInt(quantiaDisponivel.textContent);

    switch (tipoIngresso) {
        case "inferior":
            if(disponibilidade > 0){
                disponibilidade -= quantidade
                quantiaDisponivel.textContent = disponibilidade;
            }
            break;
        case "superior":
            if(disponibilidade > 0){
                disponibilidade -= quantidade
                quantiaDisponivel.textContent = disponibilidade;
            }
            break;
        case "pista":
            if(disponibilidade > 0){
                disponibilidade -= quantidade
                quantiaDisponivel.textContent = disponibilidade;
            }
            break;
    }
}
//Diminuir quantidade disponível 