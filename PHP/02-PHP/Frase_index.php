<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        function monta_frase(){
            $nome= $_POST["nome"];
            $idade= $_POST["idade"];
            $hobby= $_POST["hobby"];

            return "Meu nome é $nome e tenho $idade anos. Meu hobby favorito é $hobby";
        }

        function imprimir($frase){
            echo "<h1>$frase</h1>";
        }

        $frase_que_sera_impressa = monta_frase();
        imprimir($frase_que_sera_impressa);
    ?>
</body>
</html>