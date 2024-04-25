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
        Schema::create('produit_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_userId');
            $table->unsignedBigInteger('produit_produitId');
            $table->decimal('note', 2, 1)->nullable(); 
            $table->text('text_avis')->nullable();
            $table->timestamp('date_publication')->nullable(); 
            $table->timestamps();
            $table->foreign('user_userId')->references('userId')->on('users')->onDelete('cascade');
            $table->foreign('produit_produitId')->references('produitId')->on('produits')->onDelete('cascade');
                    $table->unique(['user_userId', 'produit_produitId']);

        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produit_user');
    }
};
