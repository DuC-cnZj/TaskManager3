<!-- 按钮触发模态框 -->
<button class="role-btn btn btn-sm pull-right" data-toggle="modal" data-target="#editUserModal-{{ $user->id }}"><i class="fa fa-cog"></i></button>
<!-- 模态框（Modal） -->
<div class="modal fade" id="editUserModal-{{ $user->id }}" tabindex="-1" role="dialog" aria-labelledby="editUserModal-{{ $user->id }}Label" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="editUserModal-{{ $user->id }}Label">编辑用户</h4>
            </div>
            <div class="modal-body">
                {!! Form::open(['route'=>['user.update',$user->id],'method'=>'patch']) !!}
                    <div class="checkbox">
                        @foreach($roles as $role)
                            <label>
                                {!! Form::checkbox('role[]', $role->id,roleCheck($role, $user)) !!}
                                {{ $role->display_name or $role->name }}
                            </label>
                        @endforeach
                    </div>

            </div>
            <div class="modal-footer">
                    <div class="form-group">
                       {!! Form::submit('编辑用户', ['class'=>'btn btn-default']) !!}
                   </div>
                {!! Form::close() !!}
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>