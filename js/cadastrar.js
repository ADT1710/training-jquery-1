const btnCadastro = $(".formulario_botao");
const tBody = $(".cadastros_tabela--corpo");

btnCadastro.click(function (){
    event.preventDefault();

    let nome = $("#nome").val();
    let idade = $("#idade").val();
    let renda = $("#renda").val();

    tBody.append(`<tr class="cadastros_linha">
                        <td class="cadastros_coluna cadastros_coluna--nome">${nome}</td>
                        <td class="cadastros_coluna valor_idade">${idade}</td>
                        <td class="cadastros_coluna valor_renda">R$${renda}</td>
                        <td class="cadastros_coluna"><button class="cadastros_botao">X</button></td>
                    </tr>`)

    $('.formulario').each(function (){this.reset()});
    $('#nome').focus();

    btnRemove = document.querySelectorAll(".cadastros_botao");
    atualizaRemovedor();
    defineMaiorRenda(parseFloat(renda), 0,0);
    calculaRendaMedia();
    calculaIdadeMedia();
});