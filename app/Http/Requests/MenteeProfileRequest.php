<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Concerns\ConvertsInputKeys;

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
