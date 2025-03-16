<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\CategoryReport;

class Report extends Model
{
    use HasFactory;

    protected $table = 'reports';
    protected $fillable = ['uuid', 'title', 'slug', 'content', 'user_id', 'is_published', 'view_count'];

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_report');
    }
}
