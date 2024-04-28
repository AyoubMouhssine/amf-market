<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class StoreProduitsCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
     public function toArray($request)
    {
        return 
            $this->collection->map(function ($produit) {
                return [
                    'id' => $produit->produitId,
                    'nom' => $produit->nom,
                    'prix' => $produit->prix,
                    'stock' => $produit->stock,
                    'description'=>$produit->description,
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
            });
    }
}
