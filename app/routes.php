<?php



// Home Routes
Route::resource('home', 'HomeController', ['only'=>['index']]);


// About Routes
Route::resource('about', 'AboutController', ['only'=>['index']]);


// Admin Routes
Route::get('/admin/show/{id}', 'AdminController@show');
Route::resource('admin', 'AdminController', ['only'=>['index', 'show']]);

// Permission Routes
Route::get('/permission/destroy/{id}', 'PermissionController@destroy');
Route::get('/userpermissions/destroy/{uid}/{pid}', 'UserPermissionsController@destroy');
Route::post('/userpermissions/store','UserPermissionsController@store');
Route::resource('permission', 'PermissionController', ['only'=>['store', 'destroy']]);


// User Routes
Route::get('/user/show/{id}', 'UserController@show');
Route::post('/user/update/{id}', 'UserController@update');
Route::get('/user/destroy/{id}', 'UserController@destroy');
Route::resource('user', 'UserController', ['only'=>['show', 'update', 'create', 'store', 'destroy']]);


// Session Routes
Route::get('/session/destroy', 'SessionController@destroy');
Route::resource('session', 'SessionController', ['only'=>['create', 'store', 'destroy']]);


// Catch All Route
App::missing(function() {
    if(Auth::check()) return Redirect::route('home.index');
    else return Redirect::route('session.create');
});