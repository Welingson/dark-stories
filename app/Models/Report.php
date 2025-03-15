<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $table = 'reports';
    protected $fillable = ['uuid', 'title', 'slug', 'content', 'user_id', 'is_published', 'view_count'];
}
