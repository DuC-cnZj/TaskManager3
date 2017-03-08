<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');

Auth::routes();

Route::get('/home', 'HomeController@welcome');

Route::resource('projects', 'ProjectsController');

Route::get('tasks/charts', ['middleware' => 'auth' , 'as'=>'tasks.charts', 'uses'=>'TasksController@charts']);

Route::get('tasks/searchApi', ['as'=>'tasks.search', 'uses'=>'TasksController@searchApi']);

Route::post('tasks/{tasks}/steps/complete', 'StepsController@completeAll');

Route::delete('tasks/{tasks}/steps/clear', 'StepsController@clearCompleted');

Route::post('tasks/{id}/check', ['as'=>'tasks.check', 'uses'=>'TasksController@check']);

Route::resource('tasks', 'TasksController');

Route::resource('tasks.steps', 'StepsController');

Route::group(['prefix' => 'admin', 'middleware'=>'auth'], function() {
    Route::resource('roles', 'RolesController');
    Route::resource('permissions', 'PermissionsController');
    Route::resource('user', 'UsersController');
});



