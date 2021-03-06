<?php

namespace App\Http\Requests;

use App\Concerns\ConvertsInputKeys;
use Illuminate\Foundation\Http\FormRequest;

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
