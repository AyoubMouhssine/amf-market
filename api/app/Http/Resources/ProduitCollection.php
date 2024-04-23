<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProduitCollection extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->produitId,
            'nom' => $this->nom,
            'prix' => $this->prix,
            'stock' => $this->stock,
            'store' => [
                'nom' => $this->store->nom_store,
                'description' => $this->store->description,
            ],
            'vendeur' => [
                'nom' => $this->store->vendeur->nom,
                'prenom' => $this->store->vendeur->prenom,
            ],
            'medias' => new MediaCollection($this->medias),
        ];
    }
}
