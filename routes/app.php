<?php

use App\Http\Controllers\App\AppDashboardController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\App\ReportController;
use App\Http\Controllers\App\CategoryController;

Route::prefix('/app')->middleware(['auth', 'verified'])->group(function () {
    Route::redirect('/', '/app/painel');

    Route::get('/painel', [AppDashboardController::class, 'index'])->name('app.dashboard');

    Route::get('/relatos', [ReportController::class, 'index'])->name('home');
    Route::get('/relatos/criar', [ReportController::class, 'create'])->name('report.create');
    Route::post('/relatos', [ReportController::class, 'store'])->name('report.store');
    Route::get('/relatos/{report}', [ReportController::class, 'show'])->name('report.show');
    Route::get('/relatos/{report}/edit', [ReportController::class, 'edit'])->name('report.edit');
    Route::put('/relatos/{report}', [ReportController::class, 'update'])->name('report.update');

    Route::get('/categorias', [CategoryController::class, 'index'])->name('categories.index');

});
