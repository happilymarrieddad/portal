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






// Catch All Route
Route::any( '(.*)', 'HomeController@index');