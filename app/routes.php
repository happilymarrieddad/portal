<?php

// Home Routes
Route::get('/', 'HomeController@index');
Route::get('/Home', 'HomeController@index');
Route::resource('home', 'HomeController', ['only'=>['index']]);


// About Routes
Route::get('/About', 'AboutController@index');
Route::resource('about', 'AboutController', ['only'=>['index']]);


// Project Routes
Route::get('/Projects', 'ProjectsController@index');
Route::resource('projects', 'ProjectsController', ['only'=>['index']]);


// Tutorial Routes
Route::get('/Tutorials', 'TutorialsController@index');
Route::resource('tutorials', 'TutorialsController', ['only'=>['index']]);


// News Routes
Route::resource('news', 'NewsController', ['only'=>['']]);


// Session Routes
Route::get('login', 'SessionController@create');
Route::get('logout', 'SessionController@destroy');
Route::resource('sessions', 'SessionController', ['only'=>['create', 'store', 'destroy']]);


// User Routes
Route::get('user', 'UserController@show');
Route::get('create', 'UserController@create');
Route::resource('user', 'UserController', ['only'=>['show', 'create', 'store', 'destroy']]);


// Catch All Route
Route::any( '(.*)', 'HomeController@index');