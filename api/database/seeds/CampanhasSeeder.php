<?php

use Illuminate\Database\Seeder;

class CampanhasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Campanha::class)->create([
            'nome_campanha' => 'Tim Controle',
            // 'comeco_campanha' => '2008-04-25',
        ]);
    }
}
