<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Produit;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
public function checkUserReview(Produit $produit, User $user)
{
  $review = $produit->users()->where('userId', $user->userId)->exists();
  return response()->json([
    'message' => $review ? 'User has already reviewed this product.' : 'User has not reviewed yet.',
    'data' => $review ? [$produit->users()->where('userId', $user->userId)->first()->pivot->toArray()] : [],
  ]);
}


public function createReview(Produit $produit, Request $request)
{
    $validatedData = $request->validate([
        'user_userId' => 'required|integer',
        'note' => 'nullable|numeric|between:0,5',
        'text_avis' => 'nullable|string',
    ]);

    $user = User::find($validatedData['user_userId']);
    
    if ($user) {
        $produit->users()->attach($user, $validatedData);
        
        $userWithReview = $produit->users()->where('user_userId', $user->userId)->first();

        $reviewData = [
            'user' => [
                'userId'=>$userWithReview->userId,
                'nom' => $userWithReview->nom,
                'prenom' => $userWithReview->prenom,
            ],
            'reviewId' => $userWithReview->pivot->id,
            'note' => $userWithReview->pivot->note,
            'text_avis' => $userWithReview->pivot->text_avis,
            'date_publication' => $userWithReview->pivot->created_at,
        ];

        return response()->json([
            'message' => 'Review created successfully!',
            'data' => $reviewData,
        ]);
    } else {
        return response()->json([
            'message' => 'User not found.',
            'errors' => ['userId' => ['Invalid user ID']],
        ], 422);
    }
}

}
