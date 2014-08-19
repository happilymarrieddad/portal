<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCpuTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('builder.cpu', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('model',20);
            $table->string('brand',20);
            $table->string('socket',11);
            $table->string('speed',11);
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
		Schema::drop('builder.cpu');
	}

}
