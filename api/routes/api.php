<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('auth/login','Api\AuthController@login');
Route::post('auth/refresh','Api\AuthController@refresh');
Route::get('auth/logout','Api\AuthController@logout');

// Route::group(['middleware'=> 'jwt.auth','middleware'=> 'GP','namespace' => 'Api\\'], function(){
Route::group(['middleware'=> 'jwt.auth'], function(){
    Route::get('auth/user','Api\AuthController@getAuthenticatedUser');

    Route::get('posts','PostController@allPosts');
    Route::get('post/{id}','PostController@showById');

    Route::post('post','PostController@store');
    Route::post('post/uploadImg','PostController@imageUploadPost');

    Route::put('post/aprovar/{id}','PostController@aprovar');
    Route::put('post/reprovar/{id}','PostController@reprovar');
    Route::get('posts/{status}','PostController@showByStatus');

    Route::get('clientes','ClienteController@allClients');
    Route::get('cliente/{id}','ClienteController@showById');

    Route::post('campanha','CampanhaController@store');

    Route::get('campanhas','CampanhaController@allCampaigns');
    Route::get('campanhas/cliente/{cliente_id}','CampanhaController@allCampaignsByClient');
    Route::get('campanha/{id}','CampanhaController@showById');
});

// Route::resource('cliente','ClienteController');



