<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Song;

class PlaylistController extends Controller
{

    public function buscar(Request $request)
    {

        $query = $request->input('busqueda');

        // Realizar la búsqueda en tu modelo (ajusta esto según tu modelo y tus necesidades)
        $resultados = Song::where('nombre', 'like', '%' . $query . '%')
                                ->orWhere('artista', 'like', '%' . $query . '%')
                                ->get();

        // Pasar los resultados a la vista
        return view('musica.buscar', compact('resultados'));
    }
}
