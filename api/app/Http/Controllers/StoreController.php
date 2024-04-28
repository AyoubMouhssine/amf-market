<?php

namespace App\Http\Controllers;
use App\Http\Resources\StoreProduitsCollection;
use App\Models\Store;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'description'=>'required',
            'vendeur_vendeurId'=>'required',
            'nom_store' => 'required|unique:stores,nom_store'
        ]);

        $store = Store::create([
            'description'=>$validatedData['description'],
            'vendeur_vendeurId'=>$validatedData['vendeur_vendeurId'],
            'nom_store'=>$validatedData['nom_store']
        ]);

        if(!$store){
            return response()->json([
                'fail'=>'error creating store'
            ]);
        }
        return response()->json([
            'success' => "store created successfully",
        ]);
    }


    public function destroy(Store $store)
    {

        $store->delete();

        return response()->json(['message' => 'Store and associated products deleted successfully'], 200);
    }


       public function products(Store $store)
    {
        $produits = $store->produits()->with('medias')->get();

        return response()->json([
            'success' => 'success',
            'data' => new StoreProduitsCollection($produits),
        ]);
    }
}
