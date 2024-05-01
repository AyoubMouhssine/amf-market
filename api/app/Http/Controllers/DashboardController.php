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
    // Total number of users
    $totalUsers = User::count();

    // Total number of stores
    $totalStores = Store::count();

    // Total number of products
    $totalProducts = Produit::count();

    // Total number of vendors
    $totalVendeurs = Vendeur::count();

    // Total sales amount
    $totalSales = Commande::sum('prix_total');

    // Total products per store with store names
    $productsPerStore = Store::withCount('produits')->get()->pluck('produits_count', 'nom_store');



       $commandesPerUser = Commande::join('users', 'commandes.user_userId', '=', 'users.userId')
        ->selectRaw('CONCAT(users.nom, " ", users.prenom) as full_name, COUNT(*) as total_commands')
        ->groupBy('commandes.user_userId')
        ->get();


    return response()->json([
        'total_users' => $totalUsers,
        'total_stores' => $totalStores,
        'total_products' => $totalProducts,
        'total_sales' => $totalSales,
        'total_vendeurs' => $totalVendeurs,
        'products_per_store' => $productsPerStore,
        'commands_per_user' => $commandesPerUser,

    ]);
}


 public function salesData()
{
    $sales = Commande::selectRaw('DATE(date_commande) as date, SUM(prix_total) as total_sales')
                     ->groupBy('date')
                     ->orderBy('date')
                     ->get();

    $labels = $sales->pluck('date')->toArray();
    $data = $sales->pluck('total_sales')->toArray();

    return response()->json([
        'labels' => $labels,
        'data' => $data,
    ]);
}

}
