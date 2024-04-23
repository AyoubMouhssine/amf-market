<?php

namespace App\Http\Controllers;

use App\Models\Store;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    use HttpResponses;
    public function create(Request $request)
    {

        $store = Store::create($request->all());

        return $this->success([
            'message' => "hello world",
            'data' => $store
        ]);
    }
}
