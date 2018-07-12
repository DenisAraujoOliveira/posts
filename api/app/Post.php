<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'name', 'prazo', 'url','text','status','campanha_id','usuario_criador_id','usuario_avaliador_id'
    ];

    protected $hidden = [
        'created_at','updated_at'
    ];
}
