<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Report;

class Category extends Model
{   
    use HasFactory;

    protected $table = 'categories';
    protected $fillable = ['uuid', 'name', 'slug', 'description'];

    public function reports()
    {
        return $this->belongsToMany(Report::class, 'category_report');
    }
}
