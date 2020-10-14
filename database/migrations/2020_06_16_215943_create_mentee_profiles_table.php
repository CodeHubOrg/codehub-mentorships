<?php

use App\Enums\ProfileStatus;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenteeProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mentee_profiles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->text('current_status')->nullable();
            $table->text('previous_experience')->nullable();
            $table->text('interests')->nullable();
            $table->text('specific_interests')->nullable();
            $table->char('mentoring_type', 3)->default('No')->nullable();
            $table->text('timeframe')->nullable();
            $table->text('suitable_time')->nullable();
            $table->text('extra_info')->nullable();
            $table->tinyInteger('status')->unsigned()->default(ProfileStatus::Confirmed);
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mentees');
    }
}
