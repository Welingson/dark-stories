<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ReportController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Middleware\AdminRoutesMiddleware;

Route::prefix('admin')->middleware(['auth', AdminRoutesMiddleware::class])->group(function () {
    Route::redirect('/', '/admin/painel');
    Route::get('/painel', [DashboardController::class, 'index'])->name('admin.dashboard');

    Route::get('/relatos', [ReportController::class, 'index'])->name('admin.reports.index');
    Route::get('/relatos/{report}', [ReportController::class, 'show'])->name('admin.reports.show');
    Route::post('/relatos', [ReportController::class, 'store'])->name('admin.reports.store');
    Route::put('/relatos/{report}', [ReportController::class, 'update'])->name('admin.reports.update');
    Route::delete('/relatos/{report}', [ReportController::class, 'destroy'])->name('admin.reports.destroy');

    Route::get('/categorias', [CategoryController::class, 'index']);
    Route::get('/categorias/{id}', [CategoryController::class, 'show'])->name('admin.categories.show');
    Route::post('/categorias', [CategoryController::class, 'store'])->name('admin.categories.store');
    Route::put('/categorias/{id}', [CategoryController::class, 'update'])->name('admin.categories.update');
    Route::delete('/categorias/{id}', [CategoryController::class, 'destroy'])->name('admin.categories.destroy');

    Route::get('/usuarios', [UserController::class, 'index'])->name('admin.users.index');
    Route::post('/usuarios', [UserController::class, 'create'])->name('admin.users.create');
    Route::get('/usuarios/{id}', [UserController::class, 'show'])->name('admin.users.show');
    Route::put('/usuarios/{id}', [UserController::class, 'update'])->name('admin.users.update');
    Route::delete('/usuarios/{id}', [UserController::class, 'destroy'])->name('admin.users.destroy');
});
