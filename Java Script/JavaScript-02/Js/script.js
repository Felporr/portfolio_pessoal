function Ex1(){
    
    var packs, litrosTotal,valorTotal;

    packs = prompt("Digite o numero de packs comprados:");

    litrosTotal = ((packs * 12) * 350)/1000;
    valorTotal = packs * 38

    alert(litrosTotal + " litros consumidos      " + "Valor Gasto: " + "R$"+ valorTotal + ",00 ");
}

//Ex1();


function Ex2(){

   var quesitos = ["criatividade","orginalidade","elegancia","acabemento","conservação"]
   var notas = [];

   for (i = 0 ; i < quesitos.length; i++ ){
    notas[i]= parseInt(prompt("Digite a nota para o quesito: "+ quesitos[i]));
   }

   notas.sort(function(a,b){
    return a-b;
   })
   alert("vetor ordenado " + notas)

   notas.shift();
   notas.pop();

   alert("vetor sem a menor e maior notas "+ notas)
   var soma = 0; 
   for(i=0; i<notas.length;i++){
    soma = soma+notas[i];
   }
   alert("A sua nota final foi de "+ soma)
}

//Ex2();


function Ex3(){

    const cores = ["Vermelho ", " Laranja ,", "Marrom","Azul"];
    const coresCorretas = [" Amarelo ", " Verde ", " Azul ", " Roxo "]

    newCores = cores.slice(0,2) + coresCorretas.slice (0,4)

    alert("Arco-Iris: "+ newCores);
}

//Ex3();


function Ex4(){

    rua = prompt("Digite sua rua:");
    numero = prompt("Digite seu numero:");
    bairro = prompt("Digite seu bairro:");
    cidade = prompt("Digite sua cidade:");
    uf = prompt("Digite se uf:");
    
    Endereco = ("O usuário mora em " + cidade + "/" + uf + " ,no bairro " + bairro + ",na " + rua + "n°: " + numero)
    alert(Endereco)
}

//Ex4();

var habilidade = ["Javascript","ReactJS","React Native","Angular"]

function Ex5(habilidade){
    if (habilidade = "Javascript"){
        alert("Tem habilidade")
    }else{
        alert("Nao tem habilidade")
    }
}

//Ex5();

function Ex6(){
    
    anos = prompt("Digite seus anos de experiencia");
    
    if ( anos > 0 && anos < 1 ){
        alert("Experiencia nivel: JUNIOR")
    }if (anos > 1 && anos <= 3){
        alert("Experiencia nivel: PLENO")
    }if (anos > 3 && anos <= 6){
        alert("Experiencia nivel: SENIOR")
    }if (anos >= 7 ){
        alert("Experiencia nivel: MESTRE JEDI")
    }
}

//Ex6()

function Ex7(){
    var usuarios = [{
        nome: "Gabriel",
        habilidades: ["Javascript","ReactJs","Redux"]
    },
    {
        nome: "Lara",
        habilidades: ["JAVA","PHP","Laravel"]
    }]
    for (const value of usuarios) {
        console.log(value);
      }
}

Ex7();