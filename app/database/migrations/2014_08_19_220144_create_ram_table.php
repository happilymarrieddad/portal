<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRamTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('builder.ram', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('brand',20);
            $table->string('model',60);
            $table->integer('price');
            $table->string('size',20);
            $table->integer('CAS');
            $table->string('speed',20);
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
		Schema::drop('builder.ram');
	}

}
