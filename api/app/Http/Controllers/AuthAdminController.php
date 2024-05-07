<?php

namespace App\Http\Controllers;

use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Admin;

class AuthAdminController extends Controller
{

    use HttpResponses;

    public function login(Request $request)
    {


        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (!Auth::guard('admin')->attempt($request->only(['email', 'password']))) {
            return $this->error('', 'Credentials do not match', 401);
        }

        $admin = Auth::guard('admin')->user();
        $token = $admin->createToken('API token of admin ' . $admin->nom . '-' . $admin->prenom, ['admin'])->plainTextToken;

        return $this->success([
            'admin' => $admin,
            'token' => $token
        ], 'success', 200);
    }

    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = Admin::create([
            'nom' => $validatedData['nom'],
            'prenom' => $validatedData['prenom'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        $token = $user->createToken('API token of admin' . $user->nom . '-' . $user->prenom, ['admin'])->plainTextToken;;
        return $this->success([
            'user' => [
                'nom' => $validatedData['nom'],
                'prenom' => $validatedData['prenom'],
                'email' => $validatedData['email']
            ],
            'token' => $token
        ], "success", 200);
    }


    public function logout(Request $request)
    {
        $user = $request->user();

        $user->tokens()->delete();
        return $this->success('', "success", 200);
    }

}
