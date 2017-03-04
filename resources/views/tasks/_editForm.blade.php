 {{-- <h2>创建模态框（Modal）</h2> --}}
<!-- 按钮触发模态框 -->
<button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#editTask-{{ $task->id }}"><i class="fa fa-btn fa-cog"></i></button>
<!-- 模态框（Modal） -->
<div class="modal fade" id="editTask-{{ $task->id }}" tabindex="-1" role="dialog" aria-labelledby="editTaskLabel-{{ $task->id }}" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="editTaskLabel-{{ $task->id }}">编辑项目</h4>
            </div>
            {!! Form::model($task, ['route'=>['tasks.update', $task->id], 'method'=>'PATCH']) !!}
            <div class="modal-body">
                <div class="form-group">
                    {!! Form::label('title', '任务名称：', ['class' => 'control-label']) !!}
                    {!! Form::text('title', null, ['class' => 'form-control']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('projectList', '所属项目', ['class' => 'control-label']) !!}
                    {!! Form::select('projectList', $projects, null, ['class'=>'form-control']) !!}
                </div>

                @if($errors->has('title'))
                    <div>
                        <ul  class="alert alert-danger">
                                @foreach( $errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                        </ul>
                    </div>
                @endif

            </div>
            <div class="modal-footer">
                    {!! Form::submit('编辑项目', ['class'=>'btn btn-primary']) !!}
            </div>
            {!! Form::close() !!} 
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>