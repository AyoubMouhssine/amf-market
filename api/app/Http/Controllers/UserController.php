<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Commande;
use App\Models\LigneCommande;
use App\Http\Resources\MediaCollection;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email', 
            'nom' => 'required|string', 
            'prenom' => 'required|string', 
            'tel' => 'nullable|string', 
            'adresse' => 'nullable|string', 
        ]);
        $user = User::where('userId', $request->id)->first(); 
        $user->update($validatedData);

        return response()->json([
            'message' => 'User information updated successfully!',
            'user'=>$user

        ], 200); 
    }

    public function getUserCommande($id){
        return response()->json([
            'data'=>Commande::where('user_userId', $id)->get()
        ]);
    }
    public function getUserCommandeProducts($id){
        $ligneCommandes = LigneCommande::where('commande_commandeId', $id)->get();

 
        $produits = [];
    
        foreach ($ligneCommandes as $ligneCommande) {
            $produit = $ligneCommande->produit;
            $produits[] = [
                'id'=>$produit->produitId,
            'quantite'=>$ligneCommande->quantite,
            'nom'=>$produit->nom,
            'prix'=>$produit->prix,
                "medias" => new MediaCollection($produit->medias)
            ];
        }
        
        return response()->json([
            'data' => $produits
        ]);
    }
}