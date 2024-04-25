<?php

use App\Http\Controllers\AuthUserController;
use App\Http\Controllers\AuthVendeurController;
use App\Http\Controllers\CategoieController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\VendeurController;
use App\Http\Controllers\ReviewController;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

Route::post('/user/login', [AuthUserController::class, 'login']);
Route::post('/user/register', [AuthUserController::class, 'register']);

Route::post('/vendeur/login', [AuthVendeurController::class, 'login']);
Route::post('/vendeur/register', [AuthVendeurController::class, 'register']);



Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/vendeur', [VendeurController::class, 'vendeur']);
    Route::post('/vendeur/logout', [AuthVendeurController::class, 'logout']);
    Route::get('/user', [AuthUserController::class, 'user']);
    Route::post('/user/logout', [AuthUserController::class, 'logout']);
    Route::post('/vendeur/1/store/create', [StoreController::class, 'create']);
    Route::post('/vendeur/create', [VendeurController::class, 'create']);
});




Route::post('/produit/image', function (Request $request) {
    $request->validate([
        'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
    ]);

    $image = $request->file('image');
    $path = $image->store('public/images', ['public']);
    Media::create([
        "produit_produitId" => $request->produit_produitId,
        "url" => $path
    ]);

    return response()->json([
        "message" => "success",
    ]);
});


Route::post('/produits/{produit}/reviews',[ReviewController::class, 'createReview']);
Route::get('/produits/images', [ProduitController::class, 'images']);

Route::get('/produits/{produit}/reviews/user/{user}', [ReviewController::class, 'checkUserReview']);

Route::apiResource('/produits', ProduitController::class);
Route::get('/produits/categorie/{categorie}', [ProduitController::class, 'produitsByCategorie']);
Route::get('/produits/{produit}/reviews', [ProduitController::class, 'reviews']);
Route::apiResource('/categories', CategoieController::class);



