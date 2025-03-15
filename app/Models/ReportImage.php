<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReportImage extends Model
{
    protected $table = 'report_images';
    protected $fillable = ['post_id', 'path', 'cover'];
}
