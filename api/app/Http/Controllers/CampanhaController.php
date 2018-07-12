<?php

namespace App\Http\Controllers;

use App\Campanha;
use Illuminate\Http\Request;

class CampanhaController extends Controller
{
    public function allCampaigns()
    {
        return response()->json(Campanha::all());
    }
    public function store(Request $request){
        $campanha = Campanha::create($request->all());
        return response()->json(Campanha::all());
    }
    public function showById($id){
        $campanha = Campanha::find($id);
        if(!$campanha){
            return response()->json(['error' => 'Campanha não encontrada'], 401);
        }
        return response()->json($campanha);
    }
}
