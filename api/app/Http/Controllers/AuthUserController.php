<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthUserController extends Controller
{

    use HttpResponses;

    public function login(LoginUserRequest $request)
    {
        $request->validated($request->all());

        if (!Auth::attempt($request->only(['email', 'password']))) {
            return $this->error('', 'Credentials do not match', 401);
        }

        $user = Auth::user();

        $token = $user->createToken('API token of user ' . $user->nom . '-' . $user->prenom, ['achteur'])->plainTextToken;



        return $this->success([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function register(StoreUserRequest $request)
    {
        $validatedData = $request->validated();

        $user = User::create([
            'nom' => $validatedData['nom'],
            'prenom' => $validatedData['prenom'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'adresse' => $validatedData['adresse'],
            'tel' => $validatedData['tel']
        ]);

        $token = $user->createToken('API token of ' . $user->nom . '-' . $user->prenom, ['achteur'])->plainTextToken;;
        return $this->success([
            'user' => [
                'nom' => $validatedData['nom'],
                'prenom' => $validatedData['prenom'],
                'email' => $validatedData['email']
            ],
            'token' => $token
        ], "user registartion avec success");
    }


    public function user()
    {
        return $this->success([
            "user" => Auth::user()
        ], "success", 200);
    }

    public function logout(Request $request)
    {
        $user = $request->user();


        $user->tokens()->delete();
        return response()->json("user logout");
    }
}
