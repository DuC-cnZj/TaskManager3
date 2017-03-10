@extends('layouts.app')

@section('content')
	<div class="container">
	@foreach($users->chunk(3) as $uuser)
	<div class="row">
	@foreach($uuser as $user)
	<div class="col-md-4">
		<div class="panel {{ $user->hasRole('admin') ? "panel-danger" : "panel-default"}} ">
		    <div class="panel-heading">
		        <h3 class="panel-title text-center">
		            {{ $user->name }}
		        @include('auth.users._editUserModal')
		        </h3>
		    </div>
		    <div class="panel-body">
		        <p>邮箱：{{ $user->email }} </p>

		        @if(count($user->roles))
				<table class="table">
				  <thead>
				    <tr>
				      <th>角色</th>
				      <th>权限</th>
				    </tr>
				  </thead>
				  <tbody>
					@foreach($user->roles as $role )
				    <tr>
				      <td>
					      <i class="fa fa-user"></i>
					      {{ $role->display_name or $role->name }}
				      </td>
				      <td>
					      <ul class="fa-ul">
					      @foreach( $role->perms as $perm)
				      			<li>
					      			<i class="fa-li fa fa-tag"></i>
				      				{{ $perm->display_name or $perm->name }}
				      			</li>
			      			@endforeach
					      </ul>
				      </td>
				    </tr>
				    @endforeach
				  </tbody>
				</table>	
				@endif	        
		    </div>
		</div>
	</div>
	@endforeach
	</div>
	@endforeach
	</div>
@endsection