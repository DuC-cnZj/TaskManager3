@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
	    @foreach($projects as $project)
        <div class="col-sm-6 col-xs-12 col-md-3">
	         <div class="thumbnail" >
				<ul class="icon-bar ">
					<li>
						@include('projects._deleteForm')
					</li>
					<li>
						<button class="btn" data-toggle="modal" data-target="#editModal-{{ $project->id }}">
							<i class="fa fa-btn fa-cog"></i>
						</button>
					</li>
				</ul>

	            <img class="container" src="{{ asset('thumbnails/'. $project->thumbnail) }}" 
	             alt="{{ $project->name }}">
	            <div class="caption">
	            <a href="{{ route('projects.show', $project->id) }}">
	            {{-- route是访问路由的路径，url是直接路径    --}}
	            {{-- <a href="{{ url('projects', $project->id) }}">  一条绝对路径--}}
	                <h4 class="text-center">{{ $project->name }}</h4>
                </a>
	            </div>
	            
	         </div>
	         @include('projects._editProjectModal')
	    </div>    		
    	@endforeach
        <div class=" col-sm-6 col-md-3">
           @include('projects/_createProjectModal')
        </div>
    </div> 
</div>

@endsection

@section('customJS')
<script>
    $(document).ready(function(){
        $('.icon-bar').hide();
        $('.thumbnail').hover(function(){
            $(this).find('.icon-bar').toggle();
        });

    });
</script>
@endsection
