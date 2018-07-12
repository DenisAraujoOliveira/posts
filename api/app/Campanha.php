<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Campanha extends Model
{
    protected $fillable = [
        'name', 'comeco_campanha', 'final_camapanha','cliente_id'
    ];

    protected $hidden = [
        'created_at','updated_at'
    ];
}
