@extends('layouts.app')

@section('content')
	<div class="container tasks-tabs">
	  <ul class="nav nav-tabs">
	    <li class="active"><a data-toggle="tab" href="#toDo">待完成</a></li>
	    <li><a data-toggle="tab" href="#Done">已完成</a></li>

	  </ul>

	  <div class="tab-content">
		  {{-- 未完成 --}}
	    <div id="toDo" class="tab-pane active">	     	
			<table class="table table-striped">
				@foreach($toDo as $task)
			    <tr>
				    <td class="first-cell">{{ $task->title }}</td>
				    <td class="first-cell">{{ $task->updated_at->diffForHumans() }}</td>
				    <td class="icon-cell">@include('tasks._checkForm')</td>
				    <td class="icon-cell">@include('tasks._editForm')</td>
				    <td class="icon-cell">@include('tasks._deleteForm')</td>
			    </tr>
		     	@endforeach

		     	{{ $toDo->links() }}
			</table>
    
	    </div>


	    {{-- 已完成 --}}
	    <div id="Done" class="tab-pane fade">
		    <table class="table table-striped">
				@foreach($Done as $task)
				    <tr>
					    <td class="first-cell">{{ $task->title }}</td>
    				    <td class="first-cell">{{ $task->updated_at->diffForHumans() }}</td>

				    </tr>
		     	@endforeach
		     	{{ $toDo->links() }}
			</table>
	      
	    </div>

	  </div>





	
	</div>
@endsection