<?php

use App\Http\Controllers\AuthUserController;
use App\Http\Controllers\AuthVendeurController;
use App\Http\Controllers\CategoieController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\VendeurController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\UserController;

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

    Route::post('/store/create', [StoreController::class, 'create']);



    Route::post('/vendeur/create', [VendeurController::class, 'create']);




//get stores of a given vendeur
    Route::get('vendeur/{vendeur}/stores', [VendeurController::class, 'stores']);

//get all products related on given store
    Route::get('/store/{store}/products',[StoreController::class, 'products']);

//delet store
    Route::delete('/store/{store}', [StoreController::class, 'destroy']);

//update user
    Route::put('/users/update', [UserController::class,'update']);

//commandes
    Route::apiResource('/commandes', CommandeController::class);


//review;
    Route::post('/produits/{produit}/reviews',[ReviewController::class, 'createReview']);

//check if user has already have review for a given produit
    Route::get('/produits/{produit}/reviews/user/{user}', [ReviewController::class, 'checkUserReview']);

//get products of a user commande
Route::get('/commandes/{id}/produits', [UserController::class, 'getUserCommandeProducts']);

//get user commandes
Route::get('/user/{user}/commandes', [UserController::class, 'getUserCommande']);
});


//get some images for carousel to display it on home page
Route::get('/produits/images', [ProduitController::class, 'images']);


//filter produits by given categorie
Route::get('/produits/categorie/{categorie}', [ProduitController::class, 'produitsByCategorie']);

//get all reviews for a given produit
Route::get('/produits/{produit}/reviews', [ProduitController::class, 'reviews']);

//
Route::apiResource('/produits', ProduitController::class);



Route::apiResource('/categories', CategoieController::class);


//subscribe
Route::post('/subscribe', [SubscriptionController::class, 'subscribe']);


