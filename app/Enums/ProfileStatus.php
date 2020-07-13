<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class ProfileStatus extends Enum
{
    const Pending = 0;
    const Confirmed = 1;
    const Disabled = 2;
}
