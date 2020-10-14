<?php

namespace App\Presenters;

use AdditionApps\FlexiblePresenter\FlexiblePresenter;

class MentorProfilePresenter extends FlexiblePresenter
{
    public function values(): array
    {
        return [
            'id' => $this->id,
            'mentoringExperience' => $this->mentoring_experience,
            'skillset' => $this->skillset,
            'suitableTime' => $this->suitable_time,
            'extraInfo' => $this->extra_info,
        ];
    }
}
