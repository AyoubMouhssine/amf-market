<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;
    protected $primaryKey = 'mediaId';


    protected $table = 'medias';

    protected $fillable = [
        'produit_produitId', 'url'
    ];

    public function produit()
    {
        return $this->belongsTo(Produit::class, "produit_produitId");
    }
}
