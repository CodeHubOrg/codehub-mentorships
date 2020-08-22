<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Concerns\ConvertsInputKeys;

class MentorProfileRequest extends FormRequest
{
    use ConvertsInputKeys;
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'mentoring_experience' => 'required',
            'skillset' => '',
            'suitable_time' => '',
            'extra_info' => '',
        ];
    }
}
