<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubscriptionPlan extends Model
{
    use HasFactory, softDeletes;
    protected $fillable = [
        'name',
        'price',
        'active-period_in_months',
        'features',
    ];

    protected $casts = [
        'features' => 'array',
    ];
}
