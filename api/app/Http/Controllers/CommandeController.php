<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Commande;
use App\Models\LigneCommande;
class CommandeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
        [
            'user_userId' => 'required|exists:users,userId',
            'prix_total'=>'required',
            'cartItems'=>'required',
        ]);

        $commande = Commande::create([
            'user_userId' => $request->user_userId,
            'prix_total' => $request->prix_total,

        ]);

        foreach ($request->cartItems as $cartItem) {
            LigneCommande::create([
                'commande_commandeId' => $commande->commandeId,
                'produit_produitId' => $cartItem['id'],
                'quantite' => $cartItem['quantity'],
                'prix_unitaire' => $cartItem['prix'],
            ]);
        }

        return response()->json(['message' => 'Command created successfully'], 201);
   
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
    public function destroy(string $id)
    {
        //
    }
}
