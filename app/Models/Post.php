<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';
    protected $fillable = ['uuid', 'title', 'slug', 'content', 'user_id', 'is_published', 'view_count'];
}
