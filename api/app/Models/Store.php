<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;
    protected $primaryKey = 'storeId';

    protected $fillable = [
        'nom_store', 'description', 'vendeur_vendeurId'
    ];
    public function vendeur()
    {
        return $this->belongsTo(Vendeur::class, 'vendeur_vendeurId', "vendeurId");
    }
    public function produits()
    {
        return $this->hasMany(Produit::class);
    }
}
