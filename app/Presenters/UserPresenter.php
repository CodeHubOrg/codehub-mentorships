<?php

namespace App\Presenters;

use AdditionApps\FlexiblePresenter\FlexiblePresenter;
use Creativeorange\Gravatar\Facades\Gravatar;
use Illuminate\Support\Str;

class UserPresenter extends FlexiblePresenter
{
    public function values(): array
    {
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'name' => $this->name,
            'email' => $this->email,
            'avatar' => Gravatar::exists($this->email)
                ? Gravatar::get($this->email)
                : 'https://avatars.dicebear.com/api/bottts/'.Str::slug($this->first_name).'.svg',
        ];
    }

    public function presetSummary()
    {
        return $this->only('name', 'avatar', 'email');
    }
}
