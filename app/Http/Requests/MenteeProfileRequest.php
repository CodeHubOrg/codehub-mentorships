<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;


class MenteeProfileRequest extends FormRequest
{
    public $fields;
    
    public function __construct()
    {
        $this->fields = [
            'currentStatus' => ['required'],
            'previousExperience' => ['required'],
            'interests' => '',
            'specificInterests' => '',
            'mentoringType' => '',
            'timeframe' => '',
            'suitableTime' => '',
            'extraInfo' => '',
            'status' => '',
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
