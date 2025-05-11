<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Song;
use App\models\User;

class Playlist extends Model
{
    use HasFactory;
    protected $primarykey ='id';
    protected $fillable = ['nombre','descripcion'];
    protected $hidden=['id'];

    public function songs(){
        return $this->hasMany(Song::class);
    }


    public function user(){
        return $this->belongsToMany(User::class);
    }

}
