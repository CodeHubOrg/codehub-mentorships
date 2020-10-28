<?php

namespace App\Presenters;

use AdditionApps\FlexiblePresenter\FlexiblePresenter;

class MentorProfilePresenter extends FlexiblePresenter
{
    public function values(): array
    {
        $user = $this->user;

        return [
            'id' => $this->id,
            'mentoringExperience' => $this->mentoring_experience,
            'interests' => $this->interests,
            'skillset' => $this->skillset,
            'suitableTime' => $this->suitable_time,
            'extraInfo' => $this->extra_info,
            'firstName' => $user->first_name,
            'lastName' => $user->last_name,
            'slackHandle' => $user->slack_handle,
            'name' => $user->name,
            'email' => $user->email,
        ];
    }
}
