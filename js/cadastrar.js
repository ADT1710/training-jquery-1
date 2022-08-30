const btnCadastro = $(".formulario_botao");
const tBody = $(".cadastros_tabela--corpo");

btnCadastro.click(function (){
    event.preventDefault();

    let nome = $("#nome").val();
    let idade = $("#idade").val();
    let renda = $("#renda").val();

    console.log(`Nome: ${nome} | Idade: ${idade} | Renda: R$${renda}`);

    tBody.append(`<tr class="cadastros_linha">
                        <td class="cadastros_coluna">${nome}</td>
                        <td class="cadastros_coluna">${idade}</td>
                        <td class="cadastros_coluna">R$${renda}</td>
                        <td class="cadastros_coluna"><button class="cadastros_botao">X</button></td>
                    </tr>`)
});