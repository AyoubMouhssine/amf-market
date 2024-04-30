<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use App\Models\Produit;
use App\Models\Store;
use App\Models\User;
use App\Models\Vendeur;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function statistics()
    {
        $totalUsers = User::count();
        $totalStores = Store::count();
        $totalProducts = Produit::count();
        $totalVendeurs = Vendeur::count();
        $totalSales = Commande::sum('prix_total');

        return response()->json([
            'total_users' => $totalUsers,
            'total_stores' => $totalStores,
            'total_products' => $totalProducts,
            'total_sales' => $totalSales,
            'total_vendeurs' => $totalVendeurs
        ]);
    }
}
