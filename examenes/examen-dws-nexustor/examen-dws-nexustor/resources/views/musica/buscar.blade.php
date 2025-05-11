@extends('Layouts.layout')
@section('content')
<div class="search-bar">
    <form action="{{ route('musica.buscar') }}" method="GET">
        <input type="text" name="busqueda" placeholder="Buscar...">
        <button type="submit">Buscar</button>
    </form>
</div>
<h1>Canciones</h1>
<table>
    <tr>
        <th>Nombre </th>
        <th>Artista</th>
    </tr>
    @foreach ($resultados as $song)
    <tr>
        <td>{{ $song->nombre }}</td>
        <td>{{ $song->artista }}</td>
    </tr>
    @endforeach
</table>
@endsection

