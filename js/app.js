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
                if(disponibilidade <= -1){
                    alert(`Número de ingressos ultrapassa a quantidade disponível`);
                } else{
                    quantiaDisponivel.textContent = disponibilidade;
                }
            } else{
                alert(`Ingressos do tipo ${tipoIngresso} foram esgotados`)
            } 
            break;
        case "superior":
            if(disponibilidade > 0){
                disponibilidade -= quantidade
                if(disponibilidade <= -1){
                    alert(`Número de ingressos ultrapassa a quantidade disponível`);
                } else{
                    quantiaDisponivel.textContent = disponibilidade;
                }
            } else{
                alert(`Ingressos do tipo ${tipoIngresso} foram esgotados`)
            } 
            break;
        case "pista":
            if(disponibilidade > 0){
                disponibilidade -= quantidade
                if(disponibilidade <= -1){
                    alert(`Número de ingressos ultrapassa a quantidade disponível`);
                } else{
                    quantiaDisponivel.textContent = disponibilidade;
                }
            } else{
                alert(`Ingressos do tipo ${tipoIngresso} foram esgotados`)
            } 
            break;
    }
}
