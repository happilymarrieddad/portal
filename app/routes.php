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
/// Computer Builder
Route::get('/Builder', 'BuilderController@create');
Route::get('/builder', 'BuilderController@create');
Route::resource('builder', 'BuilderController', ['only'=>['create', 'store']]);


// Tutorial Routes
Route::get('/Tutorials', 'TutorialsController@index');
Route::resource('tutorials', 'TutorialsController', ['only'=>['index']]);


// Session Routes
Route::get('login', 'SessionController@create');
Route::get('logout', 'SessionController@destroy');
Route::get('Login', 'SessionController@create');
Route::get('Logout', 'SessionController@destroy');
Route::resource('sessions', 'SessionController', ['only'=>['create', 'store', 'destroy']]);


// User Routes
Route::get('user/show', 'UserController@show');
Route::get('user/edit', 'UserController@edit');
Route::get('user/create', 'UserController@create');
Route::post('user/{id}', 'UserController@update');
Route::resource('user', 'UserController', ['only'=>['show', 'store', 'destroy', 'create', 'edit', 'update']]);


// Article Routes
Route::get('article/show', 'ArticleController@show');
Route::get('article/create', 'ArticleController@create');
Route::resource('article', 'ArticleController', ['only'=>['create', 'show', 'store']]);


// Error Routes
Route::get('/error/{id}', 'ErrorController@show');
Route::get('/error', 'ErrorController@index');
Route::resource('error', 'ErrorController', ['only'=>['show', 'index']]);


// Java3D Routes
Route::get('/java3d', 'Java3DController@index');
Route::resource('java3d', 'Java3DController', ['only'=>['index', 'show']]);


// Angband3D Routes
Route::get('/angband3d', 'Angband3DController@index');
Route::resource('angband3d', 'Angband3DController', ['only'=>['index']]);


// ArmyBuilder Routes
Route::get('/armybuilder', 'ArmyBuilderController@index');
Route::resource('armybuilder', 'ArmyBuilderController', ['only'=>['index']]);

Route::resource('sm', 'SpaceMarineController', ['only'=>['index']]);
Route::resource('sw', 'SpaceWolvesController', ['only'=>['index']]);



// Catch All Route
App::missing(function() {
    return Redirect::to('/');
});