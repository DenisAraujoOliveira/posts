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
Route::group(['middleware'=> 'jwt.auth','namespace' => 'Api\\'], function(){
    Route::get('auth/user','AuthController@getAuthenticatedUser');
});

// Route::resource('cliente','ClienteController');
Route::get('clientes','ClienteController@allClients');
Route::get('cliente/{id}','ClienteController@showById');

Route::get('campanhas','CampanhaController@allCampaigns');
Route::get('campanha/{id}','CampanhaController@showById');

Route::get('posts','PostController@allPosts');
Route::get('post/{id}','PostController@showById');
Route::get('posts/{status}','PostController@showByStatus');

