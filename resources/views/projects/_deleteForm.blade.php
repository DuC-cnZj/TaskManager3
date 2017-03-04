{!! Form::open(['route'=>['projects.destroy', $project->id], 'method'=>'delete']) !!}
	<button class="btn" type="submit">
		<i class="fa fa-btn fa-close"></i>							
	</button>
{!! Form::close() !!}