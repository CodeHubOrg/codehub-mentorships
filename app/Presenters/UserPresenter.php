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
            'firstName' => $this->first_name,
            'lastName' => $this->last_name,
            'slackHandle' => $this->slack_handle,
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
