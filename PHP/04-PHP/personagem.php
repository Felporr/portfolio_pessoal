<?php

class Personagem {
    public $nome = "";
    public $tipo = "";
    public $nivel = 0;

    public function aumentarNivel(){
       $this-> nivel++;
    }
}

$joao = new Personagem();
$joao->nome = $_POST["nome"];
$joao->tipo = $_POST["tipo"];
$joao->nivel = intval($_POST["nivel"]);

var_dump ($joao);

$joao->aumentarNivel();

var_dump($joao);
?>