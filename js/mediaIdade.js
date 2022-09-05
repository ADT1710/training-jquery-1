const mediaIdade = $("#media-idade");
let todasIdades = document.querySelectorAll(".valor_idade");

function calculaIdadeMedia(){
    todasIdades = document.querySelectorAll(".valor_idade");
    let montanteIdade = 0;
    if (todasIdades.length != 0){
        if (mediaIdade.text() != "Não Calculada");{
            todasIdades.forEach(idade => {
                montanteIdade += parseInt(idade.textContent);
                let media = montanteIdade/todasIdades.length;
                mediaIdade.text(`${media}`);
            });
        }
    }
    else{
        mediaIdade.text("Não Calculada");
    }
}

calculaIdadeMedia();