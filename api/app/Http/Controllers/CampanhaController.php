<?php

namespace App\Http\Controllers;

use App\Campanha;
use Illuminate\Http\Request;

class CampanhaController extends Controller
{
    public function allCampaigns()
    {
        // $campanhas = DB::table('campanhas')->join('clientes', 'campanhas.cliente_id', '=', 'clientes.id')->get();
        $campanhas = Campanha::all();
        foreach ($campanhas as $campanha){
            $campanha->cliente;
        }
        return response()->json($campanhas);
    }
    public function store(Request $request){
        $campanha = Campanha::create($request->all());
        return response()->json($campanha);
    }
    public function showById($id){
        $campanha = Campanha::find($id);
        // $campanha = DB::table('campanhas')->join('clientes', 'campanhas.cliente_id', '=', 'cliente.id')->get();
        if(!$campanha){
            return response()->json(['error' => 'Campanha não encontrada'], 401);
        }
        $campanha->cliente;

        return response()->json($campanha);
    }
    public function allCampaignsByClient($cliente_id){
        $campanhas = Campanha::where('cliente_id', $cliente_id)->get();
        if(!$campanhas){
            return response()->json(['error' => 'Campanhas não encontrada'], 401);
        }

        foreach($campanhas as $campanha){
            $campanha->cliente;
        }

        return response()->json($campanhas);
    }

}
