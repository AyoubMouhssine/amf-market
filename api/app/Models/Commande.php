<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    use HasFactory;
    protected $primaryKey = 'commandeId';

    protected $fillable = [
       'user_userId','prix_total'
    ];
    
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function ligneCommandes() {
        return $this->hasMany(LigneCommande::class);
    }
    public function paiement() {
        return $this->belongsTo(Paiement::class);
    }
}
