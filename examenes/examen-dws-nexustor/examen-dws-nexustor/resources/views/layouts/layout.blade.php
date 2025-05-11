<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
   <link rel="stylesheet" href="/css/style.css">
</head>

<body>
    <header>
        <h1>Txurdi Spotify</h1>
    </header>
    <nav>
            <a href="{{route('musica.index')}}">inicio</a>
            <a href="">musica</a></li>
            <a href="{{route('musica.loguin')}}">podcast</a>
            <a href="{{ route('musica.buscar')}}">buscar</a>
            @auth
                <a href="{{ route('musica.logout')}}">logout</a>
            @endauth
    </nav>
    @yield('content')
</body>
<footer>
    <h3>Contacto:Nestor@fptxurdinaga.com|20024 exámen reto 2ªevalución</h3>
</footer>

</html>
