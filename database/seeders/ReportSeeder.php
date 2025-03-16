<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Report;
use App\Models\Category;

class ReportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $categories = Category::all();  

        Report::factory(50)->create()->each(function ($report) use ($categories) {
            $categoryId = $categories->random(rand(1,3))->pluck('id')->toArray();
            $report->categories()->attach($categoryId);
        });
    }
}
