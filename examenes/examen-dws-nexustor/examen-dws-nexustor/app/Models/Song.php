<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Playlist;

class Song extends Model
{
    use HasFactory;
    protected $primarykey ='id';
    protected $fillable = ['nombre','artista','album','playlist_id'];
    protected $hidden=['id'];

    public function playlist(){
        return $this->belongsTo(Playlist::class);
    }

}
