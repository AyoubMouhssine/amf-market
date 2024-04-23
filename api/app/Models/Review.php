<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_userId', 'produit_produitId', 'note','text_avis','date_publication'
    ];
    public function produit() {
        return $this->belonsTo(Produit::class);
    }
    public function user() {
        return $this->belonsTo(User::class);
    }
}
