<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMotherboardTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('builder.motherboard', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('model',60);
            $table->string('brand',20);
            $table->string('socket',11);
            $table->integer('ramslots');
            $table->integer('price');
            $table->text('description');
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
		Schema::drop('builder.motherboard');
	}

}
