const botoes =  document.querySelectorAll(".perguntas button");
console.log(botoes)


function mostrarItens(event){
   const pergunta = event.currentTarget;
   const atributo = pergunta.getAttribute("aria-controls");
   const resposta = document.getElementById(atributo);
   resposta.classList.toggle("ativa");
   console.log('teste')


}   

function adicionarEvento(pergunta){
    pergunta.addEventListener('click', mostrarItens);
};

botoes.forEach(adicionarEvento);