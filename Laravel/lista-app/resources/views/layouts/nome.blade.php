<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lista-app</title>
    <style>
        
        body { 
            border: 0px;
            margin: 0px;
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-style: normal;
        }
        
        header {
            width: 100%;
            height: 75px;
            background-color: black;
            display: flex;
            align-items: center;
            justify-items: center;
        }

        a {
            color: white;
            margin: 0px 20px 0px 20px;
            text-decoration: none;
        }

        a:hover { 
            color: #c5c2c2
        }

        div { 
            width : 100%;
            text-align: center;
        }

        .nome {
            width: 100%;
            height: 500px;
        }

    </style>
</head>
<body>
    <header>
        <div>
            <a href = "layouts/nome">Nome</a>
            <a href = "">Games</a>
            <a href = "">Empresas</a>
        </div>
    </header>

    <div class = "nome">
        <div class = "h1">
            <h1>Filipe José</h1>
        </div>
        <div class = "h2">
            <h2>20 - 3b2</h2>
        </div>
    </div>
</body>
</html>