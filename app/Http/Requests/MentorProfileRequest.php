<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class MentorProfileRequest extends FormRequest
{
    public $fields;

    public function __construct()
    {
        $this->fields = [
            'mentoringExperience' => 'required',
            'skillset' => '',
            'suitableTime' => '',
            'extraInfo' => '',
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return $this->fields;
    }
}
