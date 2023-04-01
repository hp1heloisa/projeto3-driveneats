let prato = "";
let drink = "";
let sobremesa = "";
let mensagem = "";
function enviar() {
  const frase = document.querySelector("button .meio");
  const botao = document.querySelector("button");
  if (prato != "" && drink != "" && sobremesa != "") {
    frase.innerHTML = "Fechar pedido";
    botao.classList.add("botaoverde");
    botao.removeAttribute("disabled");
  } else {
    frase.innerHTML = "Selecione os 3 itens para fechar o pedido";
    botao.classList.remove("botaoverde");
    botao.setAttribute("disabled", "disabled");
  }
}
function selecionaPrato(pra) {
  const escolhido = document.querySelector(pra);
  const legal = document.querySelector(pra + " .simbolo");
  const verifica = document.querySelector(".inicio .marcacao");
  const ver = document.querySelector(".inicio .verde");
  if (verifica != null && ver != null) {
    if (verifica != escolhido && ver != legal) {
      verifica.classList.remove("marcacao");
      ver.classList.remove("verde");
    }
  }
  escolhido.classList.toggle("marcacao");
  legal.classList.toggle("verde");
  prato = pra;
  if (escolhido.classList.contains("marcacao") == false) {
    prato = "";
  }
  enviar();
}
function selecionaBebida(pra) {
  const escolhido = document.querySelector(pra);
  const legal = document.querySelector(pra + " .simbolo");
  const verifica = document.querySelector(".liquidos .marcacao");
  const ver = document.querySelector(".liquidos .verde");
  if (verifica != null && ver != null) {
    if (verifica != escolhido && ver != legal) {
      verifica.classList.remove("marcacao");
      ver.classList.remove("verde");
    }
  }
  escolhido.classList.toggle("marcacao");
  legal.classList.toggle("verde");
  drink = pra;
  if (escolhido.classList.contains("marcacao") == false) {
    drink = "";
  }
  enviar();
}
function selecionaSobremesa(pra) {
  const escolhido = document.querySelector(pra);
  const legal = document.querySelector(pra + " .simbolo");
  const verifica = document.querySelector(".dessert .marcacao");
  const ver = document.querySelector(".dessert .verde");
  if (verifica != null && ver != null) {
    if (verifica != escolhido && ver != legal) {
      verifica.classList.remove("marcacao");
      ver.classList.remove("verde");
    }
  }
  escolhido.classList.toggle("marcacao");
  legal.classList.toggle("verde");
  sobremesa = pra;
  if (escolhido.classList.contains("marcacao") == false) {
    sobremesa = "";
  }
  enviar();
}
function pedir() {
  let primeiro = document.querySelector(prato + " .numero").innerHTML;
  let segundo = document.querySelector(drink + " .numero").innerHTML;
  let terceiro = document.querySelector(sobremesa + " .numero").innerHTML;
  let total =
    parseFloat(
      document.querySelector(prato + " .numero").innerHTML.replace(",", ".")
    ) +
    parseFloat(
      document.querySelector(drink + " .numero").innerHTML.replace(",", ".")
    ) +
    parseFloat(
      document.querySelector(sobremesa + " .numero").innerHTML.replace(",", ".")
    );
  total = total.toFixed(2);
  total = String(total).replace(".", ",");
  const botao = document.querySelector("button");
  let plate = document.querySelector(prato + " .nome").innerHTML;
  let dk = document.querySelector(drink + " .nome").innerHTML;
  let sobre = document.querySelector(sobremesa + " .nome").innerHTML;
  mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${plate} \n- Bebida: ${dk} \n- Sobremesa: ${sobre} \nTotal: R$ ${total}`;
  const pessoa = prompt("Qual o seu nome?");
  const endereco = prompt("Qual o seu endereço?");
  mensagem = mensagem + `\n\nNome: ${pessoa} \nEndereço: ${endereco}`;
  mensagem = encodeURIComponent(mensagem);
  document.querySelector(".confirmacao .entrada").innerHTML = plate;
  document.querySelector(".confirmacao .drink").innerHTML = dk;
  document.querySelector(".confirmacao .sobremesa").innerHTML = sobre;
  document.querySelector(".confirmacao .valore").innerHTML = primeiro;
  document.querySelector(".confirmacao .valord").innerHTML = segundo;
  document.querySelector(".confirmacao .valors").innerHTML = terceiro;
  document.querySelector(".confirmacao .valot").innerHTML = "R$ " + total;
  document.querySelector(".porfora").removeAttribute("style");
}
function wpp() {
  window.open("https://wa.me/+5521999999999?text=" + mensagem);
}
function voltar() {
  document.querySelector(".porfora").setAttribute("style", "display:none;");
}
