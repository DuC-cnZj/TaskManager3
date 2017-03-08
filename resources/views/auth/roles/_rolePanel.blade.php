@foreach($roles as $role)	
		<div class="col-md-4">
			<div class="panel {{ $role->name == 'admin' ? "panel-danger" : "panel-default"}} ">
			    <div class="panel-heading">
					<i class="fa fa-user fa-btn"></i> 
					{{ $role->display_name or $role->name }}
			    </div>
			    <div class="panel-body">
				    <ul class="fa-ul">
				    @foreach($role->perms as $perm)
					    <li>
					    	<i class="fa fa-tag"></i> 
					        {{ $perm->display_name or $perm->name }}
					    </li>
				    @endforeach
				    </ul>
			    </div>
			    @if($role->description)
				    <div class="panel-footer">
				    	{{ $role->description }}
				    </div>
			    @endif
			</div>
		</div>

	@endforeach

