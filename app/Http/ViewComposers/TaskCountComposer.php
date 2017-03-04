<?php

namespace App\Http\ViewComposers;

use Illuminate\Contracts\View\View;
use App\Task;
use App\Repositories\TasksRepository;

class TaskCountComposer
{
   
    public function __construct(TasksRepository $task)
    {
        $this->task = $task;
    }

    /**
     * 绑定数据到视图.
     *
     * @param View $view
     * @return void
     */
    public function compose(View $view)
    {
        $view->with([
            'total' => $this->task->total(),
            'toDoCount' => $this->task->toDoCount(),
            'doneCount' => $this->task->doneCount(),
            ]);
    }
}

