<?php

namespace App\Http\Controllers;
use App\Mail\SubscribeConfirmation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Subscription;

class SubscriptionController extends Controller
{
    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:subscriptions,email',
        ]);

        $subscription = Subscription::create([
            'email' => $request->email,
        ]);

        Mail::to($request->email)->send(new SubscribeConfirmation());
        return response()->json(['message' => 'Email subscription successful'], 200);
    }
}
