<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'nome_user' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
        'access' => 3
    ];
});
$factory->define(App\Cliente::class, function (Faker $faker) {
    return [
        'nome_cliente' => $faker->name
    ];
});
$factory->define(App\Campanha::class, function (Faker $faker) {
    $start = $faker->dateTimeBetween($startDate = 'now', $endDate = '+1 years', $timezone = null);
    return [
        'nome_campanha' => $faker->name,
        'comeco_campanha' => $start,
        'final_campanha' => $faker->dateTimeBetween($startDate = $start, $endDate = '+2 years', $timezone = null),
        'cliente_id' => 1
    ];
});
$factory->define(App\Post::class, function (Faker $faker) {
    $start = $faker->dateTimeBetween($startDate = 'now', $endDate = '+1 years', $timezone = null);
    return [
        'nome_post' => $faker->name ,
        'prazo' => $faker->dateTimeBetween($startDate = 'now', $endDate = '+1 months', $timezone = null),
        'url' => $faker->imageUrl($width = 640, $height = 480, 'cats'),
        'text' => $faker->realText($maxNbChars = 200, $indexSize = 2),
        'status' => 0,
        'campanha_id' => 1 ,
        'usuario_criador_id' => 3,
        // 'usuario_avaliador_id => $faker->name '
    ];
});
