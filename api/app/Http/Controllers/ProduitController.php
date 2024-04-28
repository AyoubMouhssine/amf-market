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
    $produit = Produit::create([
        'vendeur_vendeurId' => $request->vendeur_vendeurId,
        'description' => $request->description,
        'nom' => $request->nom,
        'stock' => $request->stock,
        'prix' => $request->prix,
        'store_storeId' => $request->store_storeId,
        'categorie_categorieId' => $request->categorie_categorieId
    ]);

    if ($request->hasFile('images')) {
        foreach ($request->file('images') as $image) {
            $path = $image->store('public/images', ['public']);
            Media::create([
                "produit_produitId" => $produit->produitId,
                "url" => $path
            ]);
        }
    }

    if(!$produit) return response()->json(['fail'=>'product deos not created successfully']);
    
    return response()->json([
        'success' => "product created successfully",
        'produit' => new ProduitCollection($produit)
    ]);
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
            "images" => new MediaCollection(Media::inRandomOrder()->take(5)->get())

        ]);
    }

    public function produitsByCategorie($categorie){
             $produits = Categorie::findOrFail($categorie)->produits()->paginate(28);

    return response()->json([
        "message" => "success",
        "data" => new ProduitsCollection($produits)
    ]);

    }


    public function reviews(Produit $produit){

        $reviews = $produit->users()->get();
        $reviewsData = [];
        foreach ($reviews as $userWithReview) {
        $reviewData = [
          'user' => [
            'userId'=>$userWithReview->userId,
            'nom' => $userWithReview->nom,
            'prenom' => $userWithReview->prenom,
          ],
            'reviewId'=>$userWithReview->pivot->id,
            'note' => $userWithReview->pivot->note,
            'text_avis' => $userWithReview->pivot->text_avis,
            'date_publication' => $userWithReview->pivot->date_publication,
        ];

            $reviewsData[] = $reviewData; 
        }


        return response()->json([
            "message" => "success",
            "data" =>  $reviewsData
        ]);    
    }
}



