<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movies;

class MovieController extends Controller
{
    public function index(Movies $movie)
    {
        return inertia('User/Dashboard/Movie/Show',compact('movie'));
    }
}
