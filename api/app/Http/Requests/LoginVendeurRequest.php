<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginVendeurRequest extends FormRequest
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
            'email' => 'required|string|email',
            'password' => 'required|string',
        ];
    }

    /**
     * Customize the validation error messages.
     *
     * @return array<string, string>
     */
    
    public function messages(): array
    {
        return [
            'email.required' => 'Le champ Email est requis.',
            'email.email' => 'L\'adresse email doit être valide.',
            'password.required' => 'Le champ Mot de passe est requis.',
        ];
    }
}
