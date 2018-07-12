<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use JWTAuth;

class GP
{


    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(JWTAuth::parseToken()->authenticate()->access !=2){
            return response()->json(['error'=>'Você não possui permissão']);
        }
        return $next($request);
    }
}
