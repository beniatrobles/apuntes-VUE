<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class LoginController extends Controller
{
    public function login(Request $request){
        $credenciales=$request->only('email','password');

        if(Auth::attempt($credenciales)){
            $request->session()->regenerate();
            return redirect('musica/podcast');
        }
        return back()->withErrors([
            'email'=>'El usuario y contraseña incorrectos'
        ])->onlyInput('email');

    }

    public function logout(Request $request):RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');

    }
}
