<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula do dia 23/02</title>
</head>
<body>
    <?php

        //int,interger
        $numero1 = 10;

        //float, double
        $numero2 = 1.99;

        //bool, boolean 
        $minha_boleana = true; //false 
    
        //texto, string 
        $meu_texto = "texto $numero1";
        var_dump($meu_texto);
        $meu_texto = 'texto $numero1';
        var_dump($meu_texto);

        //null
        $nula = NULL;

        function imprimir($valor) {
            var_dump($valor);
            echo $valor;
        }
            
        imprimir("Fernando");


        function soma($a,$b){
            if ($b > 10 ){
                return;
            }

            if ($a < 0){
                return 0;
            }
            return $a + $b;
        }

        var_dump(soma(5,11));
        var_dump(soma(-5,2));
        var_dump(soma(1,5));

        function xpto(){
            $x = 10;
            return $x;
        }

        var_dump(xpto());
    ?>
</body>
</html>