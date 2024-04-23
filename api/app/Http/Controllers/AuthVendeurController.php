<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginVendeurRequest;
use App\Http\Requests\StoreVendeurRequest;
use App\Models\Vendeur;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthVendeurController extends Controller
{
    use HttpResponses;

    public function login(LoginVendeurRequest $request)
    {
        $request->validated($request->all());

        if (!Auth::guard('vendeur')->attempt($request->only(['email', 'password']))) {
            return $this->error('', 'Credentials do not match', 401);
        }
        $vendeur = Auth::guard('vendeur')->user();

        $token = $vendeur->createToken('API token of vendeur ' . $vendeur->nom . '-' . $vendeur->prenom, ['vendeur'])->plainTextToken;

        return $this->success([
            'vendeur' => $vendeur,
            'token' => $token
        ]);
    }

    public function register(StoreVendeurRequest $request)
    {
        // Validation will automatically be performed based on the rules in StoreVendeurRequest
        $validatedData = $request->validated();

        $vendeur = Vendeur::create([
            'nom' => $validatedData['nom'],
            'prenom' => $validatedData['prenom'],
            'email' => $validatedData['email'],
            'cin' => $validatedData['cin'],
            'password' => Hash::make($validatedData['password']),
            'adresse' => $validatedData['adresse'],
            'tel' => $validatedData['tel']
        ]);

        $token = $vendeur->createToken('API token of vendeur ' . $vendeur->nom . '-' . $vendeur->prenom, ['vendeur'])->plainTextToken;

        return $this->success([
            'vendeur' => [
                'nom' => $validatedData['nom'],
                'prenom' => $validatedData['prenom'],
                'email' => $validatedData['email']
            ],
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        $user = $request->user();

        $user->tokens()->delete();

        return response()->json("user logout");
    }
}
