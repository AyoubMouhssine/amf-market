<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->unsignedBigInteger('reviewsId', true)->primary();
            $table->unsignedBigInteger('user_userId');
            $table->foreign('user_userId')->references('userId')->on('users');
            $table->unsignedBigInteger('produit_produitId');
            $table->foreign('produit_produitId')->references('produitId')->on('produits');
            $table->float('note');
            $table->text('text_avis');
            $table->dateTime('data_publication');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
