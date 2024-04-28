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
        Schema::create('produits', function (Blueprint $table) {
            $table->unsignedBigInteger('produitId', true)->primary();
            $table->unsignedBigInteger('store_storeId');
            $table->unsignedBigInteger('categorie_categorieId');
            $table->string('nom');
            $table->float('prix');
            $table->integer('stock');
            $table->foreign('store_storeId')->references('storeId')->on('stores')->onDelete('cascade');
            $table->foreign('categorie_categorieId')->references('categorieId')->on('categories')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produits');
    }
};
