<?php

namespace App\Presenters;

use AdditionApps\FlexiblePresenter\FlexiblePresenter;

class MenteeProfilePresenter extends FlexiblePresenter
{
    public function values(): array
    {
        return  [
            'id' => $this->id,
            'currentStatus' => $this->current_status,
            'previousExperience' => $this->previous_experience,
            'interests' => $this->interests,
            'specificInterests' => $this->specific_interests,
            'mentoringType' => $this->mentoring_type,
            'timeframe' => $this->timeframe,
            'suitableTime' => $this->suitable_time,
            'extraInfo' => $this->extra_info,
            'status' => $this->status,
        ];
    }
}
