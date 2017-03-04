@if($errors->has('name'))
    <div>
        <ul  class="alert alert-danger">
                @foreach( $errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
        </ul>
    </div>
@endif

{!! Form::open(['route'=>['tasks.store', 'project' => $project_id], 'class'=>' form-inline-fullwith col-md-offset-1 form-group']) !!}
	<div class="form-group col-md-10 ">
	<td  > 
		{!! Form::text('name',null,['placeholder'=>'有什么要完成的任务吗？','class'=>'form-control']) !!}
	</td></div>
	<div class="form-group col-md-2">
	<td >
		<button type="submit" class="btn btn-success btn-md">
			<i class="fa fa-plus"></i>
		</button>
	</td></div>
{!! Form::close() !!}
