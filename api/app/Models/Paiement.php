<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paiement extends Model
{
    use HasFactory;
    protected $primaryKey = 'paiementId';

    protected $fillable = [
       'commande_commandeId','mode_paiement','id_transaction'
    ];
    public function commande() {
        return $this->belonsTo(Commande::class);
    }
}
