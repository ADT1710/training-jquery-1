let maiorRenda = "Não Informada";
const campoMaiorRenda = $('#maior-renda');
redefinirMaiorRenda();

function defineMaiorRenda(rendaInformada, metodo, cont){
    if((maiorRenda == "Não Informada" || rendaInformada > maiorRenda) && metodo == 0){
        maiorRenda = rendaInformada;
        campoMaiorRenda.text(`R$${maiorRenda}`);
    }
    else if(metodo == 1){
        if (cont == 0 || rendaInformada > maiorRenda){
            maiorRenda = rendaInformada;
            campoMaiorRenda.text(`R$${maiorRenda}`);
        }
        if (rendaInformada == "Não Informada"){
            maiorRenda = "Não Informada";
            campoMaiorRenda.text(maiorRenda);
        }
    }
}


function redefinirMaiorRenda(){
    let cont = 0;
    let rendas = document.querySelectorAll(".valor_renda");
    if(rendas.length == 0){
        defineMaiorRenda("Não Informada",1, -1)
    }
    else if(rendas.length >= 1){
        rendas.forEach(renda => {
            let renda_string = renda.textContent;
            renda_string = renda_string.replace("R$","");
            defineMaiorRenda(parseFloat(renda_string), 1, cont);
            cont++;
        });
    }
}