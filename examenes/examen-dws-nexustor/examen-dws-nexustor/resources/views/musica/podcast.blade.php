@extends('layouts.layout')
@section('content')
<h1>Podcast</h1>
<table>
    <tr>
        <th>Nombre </th>
        <th>Descripcion</th>

        {{-- <th>borrar</th> --}}

    </tr>
    @foreach ($podcasts as $podcast)
    <tr>
        <td>
            {{ $podcast->nombre }}</td>
            <td> {{ $podcast->descripcion }}</td>
    </tr>
    @endforeach
    </table>
@endsection
