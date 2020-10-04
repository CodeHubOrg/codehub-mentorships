<?php

use App\Enums\ProfileStatus;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMentorProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mentor_profiles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('mentoring_experience');
            $table->text('interests')->nullable();
            $table->text('skillset')->nullable();
            $table->text('suitable_time')->nullable();
            $table->text('extra_info')->nullable();
            $table->tinyInteger('status')->unsigned()->default(ProfileStatus::Confirmed);
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mentors');
    }
}
