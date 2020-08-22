<?php

namespace App\Http\Requests;

use App\Concerns\ConvertsInputKeys;
use Illuminate\Foundation\Http\FormRequest;

class MentorMenteeRequest extends FormRequest
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
            'mentor_id' => ['required'],
            'mentee_id' => ['required'],
        ];
    }
}
