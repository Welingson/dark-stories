<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class CategoryReport extends Pivot
{
    protected $table = 'category_report';
    protected $fillable = ['category_id', 'post_id'];
}
