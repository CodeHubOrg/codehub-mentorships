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
            'role' => $this->roles->count() > 0 ? $this->first()->only('id', 'name') : null,
        ];
    }

    public function presetSummary()
    {
        return $this->only('name', 'avatar', 'email');
    }

    public function presetTableSummary()
    {
        return $this->only('name', 'email', 'slackHandle', 'role');
    }
}
