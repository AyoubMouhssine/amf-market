<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LigneCommande extends Model
{
    use HasFactory;
    protected $primaryKey = 'lignecommandeId';

    protected $fillable = [
       'commande_commandeId','produit_produitId','quantite','prix_unitaire'
    ];
    public function commande() {
        return $this->belongsTo(Commande::class);
    }
    public function produit() {
        return $this->belongsTo(Produit::class);
    }
}
