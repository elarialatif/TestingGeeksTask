<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/features','App\Http\Controllers\ApiController@home');
Route::get('/team','App\Http\Controllers\ApiController@home');
// Route::get('/currentUser','App\Http\Controllers\ApiController@stories');
Route::get('/recentlyStories','App\Http\Controllers\ApiController@stories');
Route::get('/viewedStories','App\Http\Controllers\ApiController@stories');

