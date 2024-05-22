//EXERCICIO 1

var somar = document.getElementById("soma")
somar.addEventListener("click",Ex1)

function Ex1(){
    let x  = document.getElementById("ValA").value;
    let y  = document.getElementById("ValB").value;
    
    z = parseInt(x) + parseInt(y) 
    document.getElementById("demo").innerHTML = z;
}



//EXERCICIO 2 

var verm = document.getElementById("vermelho")
vermelho.addEventListener("click",Ex2_1)

function Ex2_1(){
    document.body.style.backgroundColor = "red";
}


var verd = document.getElementById("verde")
verde.addEventListener("click",Ex2_2)

function Ex2_2(){
    document.body.style.backgroundColor = "green";
}


var azu = document.getElementById("azul")
azul.addEventListener("click",Ex2_3)

function Ex2_3(){
    document.body.style.backgroundColor = "blue";
}


var amar = document.getElementById("amarelo")
amarelo.addEventListener("click",Ex2_4)

function Ex2_4(){
    document.body.style.backgroundColor = "yellow";
}


var brac = document.getElementById("branco")
branco.addEventListener("click",White)

function White(){
    document.body.style.backgroundColor = "white";
}



//EXERCICIO 3 

var vermelho3 = document.getElementById("vermelho3")
vermelho3.addEventListener("mouseover",Ex3_1)
vermelho3.addEventListener("mouseout", White);

function Ex3_1(){
    document.body.style.backgroundColor = "red";
}


var verde3 = document.getElementById("verde3")
verde3.addEventListener("mouseover",Ex3_2)
verde3.addEventListener("mouseout", White);

function Ex3_2(){
    document.body.style.backgroundColor = "green";
}


var azul3 = document.getElementById("azul3")
azul3.addEventListener("mouseover",Ex3_3)
azul3.addEventListener("mouseout", White);

function Ex3_3(){
    document.body.style.backgroundColor = "blue";
}


var amarelo3 = document.getElementById("amarelo3")
amarelo3.addEventListener("mouseover",Ex3_4)
amarelo3.addEventListener("mouseout", White);

function Ex3_4(){
    document.body.style.backgroundColor = "yellow";
}


//EXERCICIO 4 

var cores = document.getElementById("cores")
cores.addEventListener("change",Ex4_1)
    
function Ex4_1(){
    document.body.style.background = cores.value
}

//EXERCICIO 5

var paragrafo = document.getElementById("paragrafo");
var botao = document.getElementById("botao");

botao.addEventListener("click",Ex5_1);

function Ex5_1() {
    if (paragrafo.style.display === "none") {
		paragrafo.style.display = "block";
		botao.textContent = "Ocultar";
	} else {
		paragrafo.style.display = "none";
		botao.textContent = "Mostrar";
	}
}

//EXERCICIO 6

var calcular = document.getElementById("CalcularEx6")
calcular.addEventListener("click", verificarDivisivel)

function verificarDivisivel() {
    let numero;
    do {
      numero = parseInt(prompt("Digite um número inteiro positivo (digite 0 para sair):"));
      if (isNaN(numero) || numero < 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
      }
    } while (isNaN(numero) || numero < 0);
  
    if (numero === 0) {
      alert("Saindo...");
      return;
    }
  
    if (numero % 3 === 0 && numero % 5 === 0) {
      alert("O número "+ numero + " é divisível por 3 e 5 ao mesmo tempo.");
    } else {
      alert("O número "+ numero + " não é divisível por 3 e 5 ao mesmo tempo.");
    }
  }