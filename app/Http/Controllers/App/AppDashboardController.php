<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AppDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('app/app-dashboard');
    }
}
