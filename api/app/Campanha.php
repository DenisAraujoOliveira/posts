<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Campanha extends Model
{
    protected $fillable = [
        'name_campanha', 'comeco_campanha', 'final_campanha','cliente_id'
    ];

    protected $hidden = [
        'created_at','updated_at','cliente_id'
    ];

    public function cliente()
    {
        return $this->belongsTo('App\Cliente', 'cliente_id','id');
    }


}
