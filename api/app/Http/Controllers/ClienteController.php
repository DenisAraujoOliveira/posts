<?php

namespace App\Http\Controllers;

use App\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function allClients()
    {
        return response()->json(Cliente::all());
    }
    public function store(Request $request){
        $cliente = Cliente::create($request->all());
        return response()->json(Cliente::all());
    }
    public function showById($id){
        $cliente = Cliente::find($id);
        if(!$cliente){
            return response()->json(['error' => 'Cliente não encontrado'], 401);
        }
        return response()->json($cliente);
    }
}
