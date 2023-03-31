function selecionaPrato(pra) {
    const escolhido = document.querySelector(pra);
    const legal = document.querySelector(pra+' .simbolo');
    const verifica = document.querySelector('.inicio .marcacao');
    const ver = document.querySelector('.inicio .verde');
    if (verifica!=null && ver!=null){
        if (verifica!=escolhido && ver!=legal){
            verifica.classList.remove('marcacao');
            ver.classList.remove('verde');
        }
    }
    escolhido.classList.toggle('marcacao');
    legal.classList.toggle('verde');
}
function selecionaBebida(pra) {
    const escolhido = document.querySelector(pra);
    const legal = document.querySelector(pra+' .simbolo');
    const verifica = document.querySelector('.liquidos .marcacao');
    const ver = document.querySelector('.liquidos .verde');
    if (verifica!=null && ver!=null){
        if (verifica!=escolhido && ver!=legal){
            verifica.classList.remove('marcacao');
            ver.classList.remove('verde');
        }
    }
    escolhido.classList.toggle('marcacao');
    legal.classList.toggle('verde');
}
function selecionaSobremesa(pra) {
    const escolhido = document.querySelector(pra);
    const legal = document.querySelector(pra+' .simbolo');
    const verifica = document.querySelector('.dessert .marcacao');
    const ver = document.querySelector('.dessert .verde');
    if (verifica!=null && ver!=null){
        if (verifica!=escolhido && ver!=legal){
            verifica.classList.remove('marcacao');
            ver.classList.remove('verde');
        }
    }
    escolhido.classList.toggle('marcacao');
    legal.classList.toggle('verde');
}