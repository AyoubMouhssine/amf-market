<?php

use App\Http\Controllers\StoreController;
use App\Http\Controllers\VendeurController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});



Route::post('/vendeur/store/create', [StoreController::class, 'create']);
Route::post('/vendeur/create', [VendeurController::class, 'create']);
