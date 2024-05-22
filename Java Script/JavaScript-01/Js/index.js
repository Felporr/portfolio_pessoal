function Ex1(){

    var salario, nome;

    nome = prompt("Digite seu nome:");

    salario = parseFloat(prompt("Digite seu salario:"));

    var salNovo = salario * 1.10;

    alert("Seu novo salario é " + salNovo);

}


//Ex1();


function Ex2(){

    var valA, valB;

    valA = parseFloat(prompt("Digite um numero:"));
    valB = parseFloat(prompt("Digite um numero:"));

    if (valA == valB) {
    
        var valC = valA + valB;
        alert("O valor final é: " + valC);
    
    }else {

        var valC = valA * valB;
        alert("O valor final é: " + valC)

    }
}

//Ex2();


function Ex3(){

    var ValorProd, parcelas;
    

    ValorProd = parseFloat(prompt("Digite o valor do produto:"));
    parcelas = parseFloat(prompt("Digite o valor de parcelas( parcelas de 3 ou 5 meses ):"));

    if (parcelas == 3 ){
       valorFinal = ValorProd * 1.10;
       alert("Valor final" + valorFinal);
    }if (parcelas == 5){
        valorFinal = ValorProd * 1.20;
        alert("Valor final" + valorFinal);
    }else {
        alert("Valor invalido, por favor digite um numero valido")
    }


}

//Ex3();


function Ex4(){

    var nomeAluno, nota1, nota2, nota3; 

    nomeAluno = prompt("Digite seu nome:")
    nota1 = parseFloat(prompt("Digite a primeira nota:"));
    nota2 = parseFloat(prompt("Digite a segunda nota:"));
    nota3 = parseFloat(prompt("Digite a terceira nota:"));

    media = (nota1 + nota2 + nota3) / 3 

    if ( media >= 7 ) {
       
        alert("Aluno aprovado");

    } else{

        alert("Aluno reprovado");

    }
}


//Ex4();


function Ex5(){

    var val1; 

    val1 = parseFloat(prompt("Digite um numero de 1 a 12:"));

    if (val1 >= 1 & val1 <= 12 ){
     
     switch (val1){

        case 1:
            val1 = "Janeiro";
        break
        case 2:
            val1 = "Fevereiro";
        break
        case 3:
            val1 = "Março";
        break
        case 4:
            val1 = "Abril";
        break
        case 5:
            val1 = "Maio";
        break
        case 6:
            val1 = "Junho";
        break
        case 7:
            val1 = "Julho";
        break
        case 8:
            val1 = "Agosto";
        break
        case 9:
            val1 = "Setembro";
        break
        case 10:
            val1 = "Outubro";
        break
        case 11:
            val1 = "Novembro";
        break
        case 12:
            val1 = "Dezembro";
    
     }

     alert(val1)

    } else {

        alert("Escreva um numero valido!")

    }
}

//Ex5();

function Ex6(){

    var val1 

    val1 = parseFloat(prompt("Digite o numero do exercio:"))

    if ( val1 >= 1 && val1 <= 5 ){
        
        if (val1 ==1) {
            Ex1();
        }
        if (val1 ==2) {
            Ex2();
        }
        if (val1 ==3) {
            Ex3();
        }
        if (val1 ==4) {
            Ex4();
        }
        if (val1 ==5) {
            Ex5();
        }
        if (val1 == 6){

        alert("É esse exercicio")
        }

    }else{

        alert("Digite um numero valido")

    }
}

Ex6();