<?php

namespace App\Http\Controllers;

use App\Models\Vendeur;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VendeurController extends Controller
{
    use HttpResponses;

    public function index()
    {
        return response()->json([
            'vendeurs' => Vendeur::all()
        ]);
    }


    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'tel' => 'nullable|string',
            'cin' => 'required|string',
            'adresse' => 'nullable|string',
        ]);
        $vendeur = Vendeur::where('vendeurId', $request->id)->first();
        $vendeur->update($validatedData);

        return response()->json([
            'message' => 'Seller information updated successfully!',
            'vendeur' => $vendeur
        ], 200);
    }



    public function create(Request $request)
    {
        $vendeur = Vendeur::create($request->all());

        return $this->success([
            'message' => 'success',
            'data' => $vendeur
        ]);
    }

    public function vendeur()
    {
        return $this->success([
            "vendeur" => Auth::user()
        ], "success", 200);
    }

    public function stores(Vendeur $vendeur)
    {
        return response()->json([
            'success' => 'success',
            'data' => $vendeur->stores
        ]);
    }

    public function destroy($id)
    {
        $vendeur = Vendeur::find($id);
        $vendeur->delete();

        return response()->json([
            'message' => 'Vendeur deleted successfully'
        ]);
    }
}
