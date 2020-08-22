<?php

namespace App\Http\Requests;

use App\Concerns\ConvertsInputKeys;
use Illuminate\Foundation\Http\FormRequest;

class MenteeProfileRequest extends FormRequest
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
            'current_status' => ['required'],
            'previous_experience' => ['required'],
            'interests' => '',
            'specific_interests' => '',
            'mentoring_type' => '',
            'timeframe' => '',
            'suitable_time' => '',
            'extra_info' => '',
            'status' => '',
        ];
    }
}
