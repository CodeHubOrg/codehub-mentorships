<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMentorProfileMenteeProfileTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mentee_profile_mentor_profile', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->biginteger('mentee_profile_id')->unsigned()->index();
            $table->foreign('mentee_profile_id')->unsigned()->references('id')->on('mentee_profiles')->onDelete('cascade');
            $table->biginteger('mentor_profile_id')->unsigned();
            $table->foreign('mentor_profile_id')->unsigned()->references('id')->on('mentor_profiles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mentee_profile_mentor_profile');
    }
}
