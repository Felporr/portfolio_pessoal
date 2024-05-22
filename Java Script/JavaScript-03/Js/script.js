function Ex1(){

    var x=0, vet1=[],vet2=[]

    while(x<5){
        vet1.push(parseInt(prompt("Digite o valor do primeiro vetor")));          
        x++;        
    }
    x=0
    while(x<5){
        vet2.push(parseInt(prompt("Digite o valor do segundo vetor")));
        x++;
    }
    
    //A
    alert("Valor de primeiro vetor: "+ vet1 +" Valor do segundo vetor: "+ vet2);

    //B
    vet3 = vet1.concat(vet2)
    alert("Valor array concatenado: "+ vet3)

    //C
    vet3.sort(function(a,b){
        return(a-b);
    });

    vet3.shift()
    vet3.pop()
    
    alert("Valor do array sem o maior e menor: "+vet3);
    var soma =0;
    for(i=0;i<vet3.length;i++){
        soma=soma+vet3[i];
    }
}

Ex1();  

function Ex2(){ 

    valor.parseInt(prompt("Digite um valor: "))
    for(i=0; i<vet4.length;i++){
        if(vet4[i] =! valor){
            alert("Valor nao encontrado")
        }else{
            alert("Valor encontrado")
        }
    }
}

//Ex2();

function Ex3(){
    
    x = 0 , vet1 =[]

    while(x<10){
        vet1.push(parseInt(prompt("Digite o valor vetor: ")));          
        x++;        
    }
    const vet2 = vet1.map((x) => x * 2);
    alert(vet2);
}

//Ex3();

function Ex4(){

    const produtos = [
        { id: 1, categoria: 'limpeza', name: 'Amaciante' },
        { id: 2, categoria: 'limpeza', name: 'Detergente' },
        { id: 3, categoria: 'alimento', name: 'ovo' },
        { id: 4, categoria: 'alimento', name: 'alface' },
        ] 
    
    var ids = produtos.map(numero => numero.id)
    alert("Id: " + ids)

}

//Ex4();

function Ex5(){

    const produtos = [
        { id: 1, categoria: 'limpeza', name: 'Amaciante' },
        { id: 2, categoria: 'limpeza', name: 'Detergente' },
        { id: 3, categoria: 'alimento', name: 'ovo' },
        { id: 4, categoria: 'alimento', name: 'alface' },
        ] 

        const result = produtos.filter((word) => word.length > 8);
        console.log(result);
}

//Ex5();