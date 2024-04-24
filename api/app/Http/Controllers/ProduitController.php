<?php

namespace App\Http\Controllers;

use App\Http\Resources\MediaCollection;
use App\Http\Resources\ProduitCollection;
use App\Http\Resources\ProduitsCollection;
use App\Models\Categorie;
use App\Models\Media;
use App\Models\Produit;
use Faker\Provider\Medical;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProduitController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

public function index(Request $request)
{
    $query = Produit::with('store.vendeur', 'categorie', 'medias');

    if ($request->has('search_query')) {
        $searchQuery = $request->input('search_query');
        $query->where('nom', 'like', "%$searchQuery%");
    }

    if($request->has('categorie')){
        $categorie = $request->input('categorie');
        $query = Categorie::findOrFail($categorie)->produits();
    }

    $produits = $query->paginate(28);

    return response()->json([
        "message" => "success",
        "data" => new ProduitsCollection($produits)
    ]);
}


    public function show(Produit $produit)
    {
        $produit->load('store.vendeur', 'medias', 'categorie');

        return response()->json([
            'message' => 'success',
            'produit' => new ProduitCollection($produit)
        ]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produit $produit)
    {
        foreach ($produit->medias as $media) {
            Storage::delete($media->url);
            $media->delete();
        }

        $produit->delete();

        return response()->json([
            'message' => 'Product and associated media deleted successfully'
        ]);
    }


    public function images()
    {
        return response()->json([
            "message" => "success",
            "images" => new MediaCollection(Media::all())
        ]);
    }

    public function produitsByCategorie($categorie){
             $produits = Categorie::findOrFail($categorie)->produits()->paginate(28);

    return response()->json([
        "message" => "success",
        "data" => new ProduitsCollection($produits)
    ]);
    }
}
