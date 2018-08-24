<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'nome_post', 'prazo', 'url','text','status','campanha_id','usuario_criador_id','usuario_avaliador_id'
    ];

    protected $hidden = [
        'created_at','updated_at','usuario_criador_id','usuario_avaliador_id','campanha_id'
    ];


    public function campanha()
    {
        return $this->belongsTo('App\Campanha', 'campanha_id','id');
    }

    public function criador()
    {
        return $this->belongsTo('App\User', 'usuario_criador_id','id');
    }

    public function avaliador()
    {
        return $this->belongsTo('App\User', 'usuario_avaliador_id','id');
    }

}
