const mediaRenda = $("#media-renda");
let todasRendas = document.querySelectorAll(".valor_renda");

function calculaRendaMedia(){
    todasRendas = document.querySelectorAll(".valor_renda");
    let montanteRenda = 0;
    if (todasRendas.length != 0){
        if (mediaRenda.text() != "Não Calculada");{
            todasRendas.forEach(renda => {
                montanteRenda += parseFloat(renda.textContent.replace("R$",""));
                let media = montanteRenda/todasRendas.length;
                mediaRenda.text(`R$${media}`);
            });
        }
    }
    else{
        mediaRenda.text("Não Calculada");
    }
}

calculaRendaMedia();

