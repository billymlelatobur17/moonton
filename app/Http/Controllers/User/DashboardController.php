<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movies;

class DashboardController extends Controller
{
    public function index()
    {
        $featuredMovies = Movies::where('is_featured', true)->get();
        $movies = Movies::all();
        return inertia('User/Dashboard/index',compact('movies', 'featuredMovies'));
    }
}
