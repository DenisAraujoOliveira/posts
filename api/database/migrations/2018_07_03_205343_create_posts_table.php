<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->date('prazo');
            $table->string('url');
            $table->longText('text');
            $table->integer('status')->default(0);
            $table->integer('campanha_id')->unsigned();
            $table->foreign('campanha_id')->references('id')->on('campanhas');
            $table->integer('usuario_criador_id')->unsigned();
            $table->foreign('usuario_criador_id')->references('id')->on('users');
            $table->integer('usuario_avaliador_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
