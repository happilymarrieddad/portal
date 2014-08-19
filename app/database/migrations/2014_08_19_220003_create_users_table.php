<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('main.users', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('first_name',120);
            $table->string('last_name',120);
            $table->string('email',120)->unique();
            $table->string('password',120);
            $table->integer('type');
            $table->string('remember_token',100)->nullable();
            $table->string('last_login',60)->nullable();
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
		Schema::drop('main.users');
	}

}
