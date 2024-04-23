<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    use HasFactory;
    protected $primaryKey = 'commandeId';

    protected $fillable = [
       'user_userId','date_commande','prix_total','status'
    ];
    public function user() {
        return $this->belonsTo(User::class);
    }
    public function ligneCommandes() {
        return $this->hasMany(LigneCommande::class);
    }
    public function paiement() {
        return $this->belonsTo(Paiement::class);
    }
}
