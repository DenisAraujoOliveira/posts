<?php

use Illuminate\Database\Seeder;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Post::class)->create([
            // 'name' => 'Post teste',
            // 'prazo' => 'Post teste',
            // 'url' => 'Post teste',
            // 'text' => 'Post teste',
            // 'status' => 'Post teste',
            // 'campanha_id' => 1,
            // 'usuario_criador_id' => '2',
            // 'usuario_avaliador_id'
            // 'name' =>  'Denis',
            // 'email'=> 'teste@teste.com',
            // 'access'=> 2
            ]);
        factory(App\Post::class)->create([
            'status' => 1,

        ]);
    }
}
