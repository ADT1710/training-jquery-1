function atualizaRemovedor(){
    btnRemove.forEach((btn, index)=>{
        btn.addEventListener('click', removeCadastro);
    });
}

function removeCadastro(){
    alert("Cadastro excluído com sucesso!");
    this.closest(".cadastros_linha").remove();
}

