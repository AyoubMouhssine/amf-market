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
        Schema::create('paiements', function (Blueprint $table) {
            $table->unsignedBigInteger('paiementId', true)->primary();
            $table->unsignedBigInteger('commande_commandeId');
            $table->foreign('commande_commandeId')->references('commandeId')->on('commandes');
            $table->string('mode_paiement');
            $table->float('id_transaction');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paiements');
    }
};
