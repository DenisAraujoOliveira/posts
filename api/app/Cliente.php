<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{

    protected $fillable = [
        'name_cliente'
    ];

    protected $hidden = [
        'created_at','updated_at'
    ];
}
