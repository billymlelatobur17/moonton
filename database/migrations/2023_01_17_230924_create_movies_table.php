<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('slug', 100);
            $table->string('category', 100);
            $table->string('video_url', 100);
            $table->string('thumbnail', 100);
            $table->float('rating')->default(0);
            $table->boolean('is_featured')->default(false);

            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('movies');
    }
};
