@extends('Layouts.layout')
@section('content')
<pre>{{Auth::user()}}</pre>
<form action="loguin" method="post">
    @csrf
    <label>Email: </label><input type="text" name="email" id="">

    <label for="">Contraseña: </label><input type="password" name="password" id=""><button type="submit">iniciar sesion</button>
    @error('email'){{$message}}

    @enderror
</form>

@endsection
