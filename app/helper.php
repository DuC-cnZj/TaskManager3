<?php 

function tasksCountArray($projects)
{
	$counts = [];
	foreach ($projects as $project) {
		$perCount = $project->tasks->count();
		array_push($counts, $perCount);
 	}
 	return $counts; 
}

function rand_color()
{
	$R = mt_rand(0, 255);
	$G = mt_rand(0, 255);
	$B = mt_rand(0, 255);


	return 'rgba('.$R.','.$G.','.$B.',0.8)';
}

function permCheck($perm, $role)
{
	return $role->hasPermission($perm->name)?true:false;
}

function roleCheck($role, $user)
{
	return $user->hasRole($role->name)?true:false;
}