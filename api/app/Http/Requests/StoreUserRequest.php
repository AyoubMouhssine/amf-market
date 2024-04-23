<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'tel' => 'required|string|min:8|max:15',
            'adresse' => 'required|string|max:255',
        ];
    }

    public function messages()
    {
        return [
            'nom.required' => 'Le champ Nom est requis.',
            'prenom.required' => 'Le champ Prénom est requis.',
            'email.required' => 'Le champ Email est requis.',
            'email.email' => 'L\'adresse email doit être valide.',
            'email.unique' => 'Cette adresse email est déjà utilisée.',
            'password.required' => 'Le champ Mot de passe est requis.',
            'password.min' => 'Le mot de passe doit contenir au moins 8 caractères.',
            'password.confirmed' => 'La confirmation du mot de passe ne correspond pas.',
            'tel.required' => 'Le champ Numéro de téléphone est requis.',
            'tel.min' => 'Le numéro de téléphone doit contenir au moins 8 caractères.',
            'tel.max' => 'Le numéro de téléphone ne doit pas dépasser 15 caractères.',
            'adresse.required' => 'Le champ Adresse est requis.',
        ];
    }
}
