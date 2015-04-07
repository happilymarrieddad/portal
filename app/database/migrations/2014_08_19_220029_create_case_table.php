<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCaseTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('builder.case', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('model',20);
            $table->string('brand',20);
            $table->string('type',20);
            $table->text('description');
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
		Schema::drop('builder.case');
	}

}
