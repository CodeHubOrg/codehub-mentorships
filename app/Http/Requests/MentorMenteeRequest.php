<?php

namespace App\Http\Requests;

use App\Concerns\ConvertsInputKeys;
use Illuminate\Foundation\Http\FormRequest;
<<<<<<< HEAD
=======
use App\Concerns\ConvertsInputKeys;
>>>>>>> create convertKeys trait to convert key casing on input, use Presenters to convert on output to the frontend

class MentorMenteeRequest extends FormRequest
{
    use ConvertsInputKeys;
<<<<<<< HEAD

=======
>>>>>>> create convertKeys trait to convert key casing on input, use Presenters to convert on output to the frontend
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
