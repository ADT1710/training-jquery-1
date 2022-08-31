function atualizaRemovedor(){
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click', function (){
            this.closest(".cadastros_linha").remove();
        });
    });
}
