<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Storage;

class ProduitsCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'produits' => $this->collection->map(function ($produit) {
                return [
                    'id' => $produit->produitId,
                    'nom' => $produit->nom,
                    'prix' => $produit->prix,
                    'stock' => $produit->stock,
                    'categorie' => $produit->categorie->nom,
                    'store' => [
                        'nom' => $produit->store->nom_store,
                        'description' => $produit->store->description,
                    ],
                    'vendeur' => [
                        'nom' => $produit->store->vendeur->nom,
                        'prenom' => $produit->store->vendeur->prenom,
                    ],
                    'medias' => new MediaCollection($produit->medias),
                ];
            }),
            'meta' => [
                'current_page' => $this->currentPage(),
                'per_page' => $this->perPage(),
                'total' => $this->total(),
                'last_page' => $this->lastPage(),
            ],
        ];
    }
}
