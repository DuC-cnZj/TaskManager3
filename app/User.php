<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    //一个用户有许多项目
    public function projects()
    {
        return $this->hasMany('App\Project');
    }

    //“has-many-through”关系提供了一个方便的访问遥远的关系通过一个中间关系的捷径。 
    public function tasks()
    {
        return $this->hasManyThrough('App\Task', 'App\Project');
    }

}
