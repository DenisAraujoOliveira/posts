<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class)->create([
            'nome_user' =>  'Denis',
            'email'=> 'teste@teste.com',
            'access'=> 1
        ]);
        factory(App\User::class)->create([
            'nome_user' =>  'Denis',
            'email'=> 'teste2@teste.com',
            'access'=> 2
        ]);
        factory(App\User::class)->create([
            'nome_user' =>  'Denis',
            'email'=> 'teste3@teste.com',
            'access'=> 3
        ]);
    }
}
