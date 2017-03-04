<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
	protected $fillable = ['title', 'project_id', 'completed'];
    //一个任务属于一个项目
    public function project()
    {
        return $this->belongsTo('App\Project');
    }

    public function steps()
    {
        return $this->hasMany('App\Step');
    }

    public function getProjectListAttribute()
    {
    	return $project_id = $this->project->id;
    }
}
