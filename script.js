let a = 0
function selecionaPrato(pra) {
    const escolhido = document.querySelector(pra);
    const legal = document.querySelector(pra+' .simbolo');
    const verifica = document.querySelector('.inicio .marcacao');
    const ver = document.querySelector('.inicio .verde');
    if (verifica!=null && ver!=null){
        if (verifica!=escolhido && ver!=legal){
            verifica.classList.remove('marcacao');
            ver.classList.remove('verde');
            a--;
        }
    }
    escolhido.classList.toggle('marcacao');
    legal.classList.toggle('verde');
    if (escolhido.classList.contains('marcacao')==true){
        a++;
    } else{
        a--;
    }
    const botao = document.querySelector('button');
    if (a<3){
        botao.innerHTML = 'Selecione os 3 itens para fechar o pedido';
        botao.classList.remove('botaoverde');
    } else{
        botao.innerHTML = 'Fechar pedido';
        botao.classList.add('botaoverde');
    }
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
            a--;
        }
    }
    escolhido.classList.toggle('marcacao');
    legal.classList.toggle('verde');
    if (escolhido.classList.contains('marcacao')==true){
        a++;
    } else{
        a--;
    }
    const botao = document.querySelector('button');
    if (a<3){
        botao.innerHTML = 'Selecione os 3 itens para fechar o pedido';
        botao.classList.remove('botaoverde');

    } else{
        botao.innerHTML = 'Fechar pedido';
        botao.classList.add('botaoverde');
    }
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
            a--;
        }
    }
    escolhido.classList.toggle('marcacao');
    legal.classList.toggle('verde');
     if (escolhido.classList.contains('marcacao')==true){
        a++;
    } else{
        a--;
    }
    const botao = document.querySelector('button');
    if (a<3){
        botao.innerHTML = 'Selecione os 3 itens para fechar o pedido';
        botao.classList.remove('botaoverde');
    } else{
        botao.innerHTML = 'Fechar pedido';
        botao.classList.add('botaoverde');
    }
}
