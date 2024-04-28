<?php

namespace App\Http\Controllers;

use App\Models\User;

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
}