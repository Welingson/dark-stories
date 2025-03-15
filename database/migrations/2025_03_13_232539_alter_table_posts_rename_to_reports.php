<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::rename('posts', 'reports');
        Schema::rename('category_post', 'category_report');

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::rename('reports', 'posts');
        Schema::rename('category_report', 'category_post');
    }
};
