<?php

namespace App\Helpers;

use Illuminate\Support\Str;

class GeneralHelper
{
    public function snakeArrayKeys(array $arr)
    {
        $snakes = [];
        foreach ($arr as $key => $val) {
            $snakes[Str::snake($key)] = $val;
        }

        return $snakes;
    }

    public function camelArrayKeys(array $arr)
    {
        $camels = [];
        foreach ($arr as $key => $val) {
            $camels[Str::camel($key)] = $val;
        }

        return $camels;
    }

    public function addCamelsToModel(object $model)
    {
        $attrs = $model->getAttributes();
        foreach ($attrs as $key => $val) {
            $camel = Str::camel($key);
            if ($camel !== $key) {
                $model->$camel = $model->$key;
            }
        }

        return $model;
    }

    public function addSelectedCamelsToModel(object $model, array $snakes)
    {
        foreach ($snakes as $snake) {
            $camel = Str::camel($snake);
            $model->$camel = $model->$snake;
        }

        return $model;
    }
}
