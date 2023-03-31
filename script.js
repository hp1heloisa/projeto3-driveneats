let a = 0
let prato = '';
let drink = '';
let sobremesa = '';
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
    const frase = document.querySelector('button .meio');
    const botao = document.querySelector('button');
    if (a<3){
        frase.innerHTML = 'Selecione os 3 itens para fechar o pedido';
        botao.classList.remove('botaoverde');
    } else{
        frase.innerHTML = 'Fechar pedido';
        botao.classList.add('botaoverde');
    }
    prato = pra;
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
    const frase = document.querySelector('button .meio');
    const botao = document.querySelector('button');
    if (a<3){
        frase.innerHTML = 'Selecione os 3 itens para fechar o pedido';
        botao.classList.remove('botaoverde');

    } else{
        frase.innerHTML = 'Fechar pedido';
        botao.classList.add('botaoverde');
    }
    drink = pra;
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
    const frase = document.querySelector('button .meio');
    if (a<3){
        frase.innerHTML = 'Selecione os 3 itens para fechar o pedido';
        botao.classList.remove('botaoverde');
    } else{
        frase.innerHTML = 'Fechar pedido';
        botao.classList.add('botaoverde');
    }
    sobremesa = pra;
}
function pedir(){
    const botao = document.querySelector('button');
    prato = document.querySelector(prato + ' .nome').innerHTML;
    drink = document.querySelector(drink + ' .nome').innerHTML;
    sobremesa = document.querySelector(sobremesa + ' .nome').innerHTML;
    let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato} \n- Bebida: ${drink} \n- Sobremesa: ${sobremesa} \nTotal: R$ 27,70`
    mensagem = encodeURIComponent(mensagem)
    if (botao.classList.contains('botaoverde')==true){
        window.open("https://wa.me/+5521999999999?text=" + mensagem);
    }
}

