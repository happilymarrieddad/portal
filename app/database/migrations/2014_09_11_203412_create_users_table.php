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
		Schema::connection('portal')->create('users', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('email', 255);
            $table->string('username', 60);
            $table->string('password', 60);
            $table->string('firstname',60);
            $table->string('lastname', 60);
            $table->boolean('receive_emails');
            $table->rememberToken();
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
		Schema::drop('users');
	}

}
