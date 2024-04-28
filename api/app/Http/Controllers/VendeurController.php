<?php

namespace App\Http\Controllers;

use App\Models\Vendeur;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VendeurController extends Controller
{
    use HttpResponses;

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

    public function stores(Vendeur $vendeur){
        return response()->json([
            'success' => 'success',
            'data'=>$vendeur->stores 
        ]);

        
    }
}
