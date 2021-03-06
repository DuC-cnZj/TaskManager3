<!-- 按钮触发模态框 -->
<button class="role-btn btn btn-sm pull-right" data-toggle="modal" data-target="#editRoleModal-{{ $role->id }}"><i class="fa fa-btn fa-cog"></i></button>
<!-- 模态框（Modal） -->
<div class="modal fade" id="editRoleModal-{{ $role->id }}" tabindex="-1" role="dialog" aria-labelledby="editRoleModal-{{ $role->id }}-Label" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="editRoleModal-{{ $role->id }}-Label">编辑角色</h4>
            </div>
            <div class="modal-body">
                {!! Form::model($role, ['method'=>'patch', 'route'=>['roles.update', $role->id]]) !!}
                @if($role->name !== 'admin')
                        <div class="form-group">
                            {!! Form::label('name', '名称：', ['class' => 'control-label']) !!}
                            {!! Form::text('name', null, ['class' => 'form-control']) !!}
                        </div>
                @endif
                        <div class="form-group">
                            {!! Form::label('display_name', '显示名称：', ['class' => 'control-label']) !!}
                            {!! Form::text('display_name', null, ['class' => 'form-control']) !!}
                        </div>

                        <div class="form-group">
                            {!! Form::label('description', '描述：', ['class' => 'control-label']) !!}
                            {!! Form::text('description', null, ['class' => 'form-control']) !!}
                        </div>



                <div class="checkbox ">
                    @foreach($perms as $perm)
                    <label>
                        {!! Form::checkbox('perm[]', $perm->id, permCheck($perm, $role)) !!}
                        {{ $perm->display_name or $perm->name }}
                    </label>
                    @endforeach
                </div>
            </div>
            <div class="modal-footer">
                <div class="form-group">
                    {!! Form::submit('提交', ['class'=>'btn btn-default']) !!}
                </div>
                {!! Form::close() !!}
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>