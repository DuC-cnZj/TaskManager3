@extends('layouts.app')
@section('customHeader')
	<meta name="token" id="token" content="{{ csrf_token() }}">
@endsection
@section('content')
	<div class="row container ">
	<h1 class="col-sm-offset-1 col-md-offset-3 col-xs-offset-1" ><span class="label label-info">Task：{{ $task->title }}</span></h1></div>
	<div class="container" id="app-4">
		{{-- <h1 class="text-muted">{{ $task->title }}</h1> --}}
	
         <step-list  v-bind:steps="steps" @new="addStep"  @complete="completeAll"  @toggle="toggleCompletion" @remove="removeStep" type="remaings"></step-list>   
         <step-list  v-bind:steps="steps"   @clear="clearCompleted"  @toggle="toggleCompletion" @remove="removeStep" type="completed"></step-list>   

	</div>
@endsection
@section('customJS')
    <script src="{{ asset('js/app1.js') }}"></script>
@endsection


