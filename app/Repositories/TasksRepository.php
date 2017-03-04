<?php 
namespace App\Repositories;

use App\Task;
use Auth;

/**
* 
*/
class TasksRepository
{
	public function total()
	{
		$total = [];
		if(Auth::user()){
			$total = Auth::user()->tasks()->count();			
		}
		// dd($total);
		return $total;
	}

	public function toDoCount()
	{
		$toDoCount = [];
		if(Auth::user()){
			$toDoCount = Auth::user()->tasks()->where('completed', 0)->count();			
		}
		// dd($toDoCount);
		return $toDoCount;
	}

	public function doneCount()
	{
		$DoneCount = [];
		if(Auth::user()){
			$DoneCount = Auth::user()->tasks()->where('completed', 1)->count();			
		}
		return $DoneCount;
	}
}