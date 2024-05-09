<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategorieCollection;
use App\Models\Categorie;
use Illuminate\Http\Request;

class CategoieController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return response()->json([
			'categories' => new CategorieCollection(Categorie::all()),
		]);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$request->validate([
			'nom' => 'required|string|unique:categories,nom',
		]);

		$existingCategory = Categorie::where('nom', $request->nom)->first();

		if ($existingCategory) {
			return response()->json([
				'message' => 'Category already exists',
			], 409);
		}

		$categorie = Categorie::create([
			'nom' => $request->nom,
		]);

		return response()->json([
			'message' => 'Category created successfully',
			'categorie' => $categorie,
		], 200);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(string $id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, string $id)
	{

		$request->validate([
			"nom" => 'required|string'
		]);

		$categorie = Categorie::find($id);

		$categorie->update([
			'nom' => $request->nom
		]);

		return response()->json([
			'message' => 'Categorie updated successfully',
		]);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy($id)
	{
		$categorie = Categorie::find($id);
		$categorie->delete();
		return response()->json([
			'message' => 'Categorie deleted successfully',
		]);
	}
}
