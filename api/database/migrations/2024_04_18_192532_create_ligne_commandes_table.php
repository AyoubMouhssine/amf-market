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
        Schema::create('ligne_commandes', function (Blueprint $table) {
            $table->unsignedBigInteger('lignecommandeId', true)->primary();
            $table->unsignedBigInteger('commande_commandeId');
            $table->foreign('commande_commandeId')->references('commandeId')->on('commandes');
            $table->unsignedBigInteger('produit_produitId');
            $table->foreign('produit_produitId')->references('produitId')->on('produits');
            $table->integer('stock');
            $table->float('prix_unitaire');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ligne_commandes');
    }
};
