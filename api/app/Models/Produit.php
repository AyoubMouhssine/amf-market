<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Produit extends Model
{
    use HasFactory;
    // use SoftDeletes;


    protected $primaryKey = 'produitId';

    protected $fillable = [
        'store_storeId', 'categorie_categorieId', 'nom', 'description', 'prix', 'stock'
    ];
    public function store()
    {
        return $this->belongsTo(Store::class, "store_storeId", "storeId");
    }

    public function ligneCommandes()
    {
        return $this->hasMany(LigneCommande::class);
    }

    public function medias()
    {
        return $this->hasMany(Media::class, null, 'produitId');
    }
    public function categorie()
    {
        return $this->belongsTo(Categorie::class, 'categorie_categorieId');
    }
  public function users()
  {
    return $this->belongsToMany(User::class)->withPivot('id','note', 'text_avis', 'date_publication');
  }
}
