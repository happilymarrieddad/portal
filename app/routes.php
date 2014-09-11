<?php



// Home Routes
Route::resource('home', 'HomeController', ['only'=>['index']]);


// About Routes
Route::resource('about', 'AboutController', ['only'=>['index']]);


// Admin Routes
Route::resource('admin', 'AdminController', ['only'=>['index']]);


// User Routes
Route::get('/user/show/{id}', 'UserController@show');
Route::get('/user/update/{id}', 'UserController@update');
Route::resource('user', 'UserController', ['only'=>['show', 'update']]);


// Session Routes
Route::resource('session', 'SessionController', ['only'=>['create', 'store', 'destroy']]);


// Catch All Route
App::missing(function() {
    return Redirect::route('home.index');
});