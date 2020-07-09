<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenteesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mentees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->text('currentstatus')->nullable();
            $table->text('previousexp')->nullable();
            $table->char('mentortype', 3)->default('No')->nullable();
            $table->text('timeframe')->nullable();
            $table->text('suitabletime')->nullable();
            $table->text('extrainfo')->nullable();
            $table->char('status', 30)->default('Pending');
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
