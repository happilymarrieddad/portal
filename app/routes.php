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
Route::post('user/update', 'UserController@update');
Route::get('user/create', 'UserController@create');
Route::resource('user', 'UserController', ['only'=>['show', 'store', 'destroy', 'create']]);


// Article Routes
Route::get('article/show', 'ArticleController@show');
Route::get('article/create', 'ArticleController@create');
Route::resource('article', 'ArticleController', ['only'=>['create', 'show', 'store']]);


// Error Routes
Route::get('/{id}', 'ErrorController@show');
Route::resource('error', 'ErrorController', ['only'=>['show']]);




// Catch All Route
App::missing(function() {
    return Redirect::to('/');
});