<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name', 'thumbnail'];
    //一个项目有许多任务
    public function tasks()
    {
        return $this->hasMany('App\Task');
    }

    //一个项目属于一个用户
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function getThumbnailAttribute($value)
    {
        if (!$value) {
            return 'flower.jpg';        
        }
        return $value;
    }
}
