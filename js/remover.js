const btnRemove = $(".cadastros_botao");

btnRemove.click(function (){
    event.preventDefault();

    this.closest('.cadastros_linha').remove();
});