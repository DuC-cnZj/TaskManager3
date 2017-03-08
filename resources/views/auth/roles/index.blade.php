@extends('layouts.app')

@section('content')
	<div class="container">
	<div class="col-md-3">
		<div class="panel panel-default">
		    <div class="panel-heading ">
		        <h4 class="text-info">新建角色</h4>
		        </div>
		            <div class="panel-body">
		        {!! Form::open(['method'=>'post', 'route'=>'roles.store']) !!}
			        @include('auth.roles._createForm')
		    
		    <div class="checkbox ">
		    	@foreach($perms as $perm)
		    	<label>
		    		{!! Form::checkbox('perm[]', $perm->id , false) !!}
			        {{ $perm->display_name or $perm->name }}
		        </label>
		    	@endforeach
		    </div>
	        <div class="form-group">
		        {!! Form::submit( '新建角色', ['class'=>'btn btn-primary']) !!}
	        </div>
	        {!! Form::close() !!}
		</div>
		</div>

		<div class="panel panel-default">
		    <div class="panel-heading ">
		        <h3 class="panel-title">新建权限</h3> </div>
		          <div class="panel-body">
		        {!! Form::open(['method'=>'post', 'route'=>'permissions.store']) !!}
			        @include('auth.roles._createForm')
		  
		   
	        <div class="form-group">
		        {!! Form::submit( '新建权限', ['class'=>'btn btn-primary']) !!}
	        </div>
	        {!! Form::close() !!}
		</div>
		</div>

		 
	</div>
		<div class="col-md-9">
			@include('auth.roles._rolePanel')
		</div>
	</div>
@endsection