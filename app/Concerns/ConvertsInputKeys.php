<?php

namespace App\Concerns;

use Illuminate\Support\Str;

trait ConvertsInputKeys
{
    public function prepareForValidation()
    {
        $convertedKeys = collect($this->input())
            ->mapWithKeys(function ($value, $key) {
                return [Str::snake($key) => $value];
            })
            ->all();

        $this->merge($convertedKeys);
    }
}
