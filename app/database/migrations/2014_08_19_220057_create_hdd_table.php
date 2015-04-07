<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHddTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('builder.hdd', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('model',60);
            $table->string('brand',20);
            $table->string('type',20);
            $table->integer('size');
            $table->integer('price');
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
		Schema::drop('builder.hdd');
	}

}
