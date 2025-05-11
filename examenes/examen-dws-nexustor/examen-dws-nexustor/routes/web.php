<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\PlaylistController;
use App\Http\Controllers\PodcastController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {return view('musica.index');})->name('musica.index');
Route::get('/musica/loguin', function () {return view('musica.loguin');})->name('musica.loguin');
Route::post('/musica/loguin',[LoginController::class,'login']);
Route::get('/musica/logout',[LoginController::class,'logout'])->name('musica.logout');
Route::get('/musica/podcast',[PodcastController::class,'podcast'])->name('musica.podcasts');
Route::get('/musica/buscar',[PlaylistController::class,'buscar'])->name('musica.buscar');


