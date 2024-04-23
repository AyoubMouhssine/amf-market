<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Vendeur extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    protected $primaryKey = 'vendeurId';

    protected $fillable = [
        'nom', 'prenom', 'email', 'cin', 'password', 'tel', 'adresse'
    ];
    
    public function stores() {
        return $this->hasMany(Store::class);
    }
}
