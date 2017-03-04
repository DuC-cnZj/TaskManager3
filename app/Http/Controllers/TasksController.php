<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Task;
use App\Project;
use Auth;
use App\Repositories\TasksRepository;


class TasksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct(TasksRepository $task)
    {
        $this->task = $task;
    }

    public function index()
    {
        $toDo = Auth::user()->tasks()->where('completed', 0)->orderBy('updated_at', 'desc')->paginate(15);
        $Done = Auth::user()->tasks()->where('completed', 1)->orderBy('updated_at', 'desc')->paginate(15);
        $projects = Project::pluck('name', 'id');
        return view('tasks.index', compact('toDo', 'Done', 'projects'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateTaskRequest $request)
    {
        //
        Task::create([
            'title' => $request->name,
            'project_id' => $request->project,
            ]);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $task = Task::findOrFail($id);
        return view('tasks.details', compact('task'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTaskRequest $request, $id)
    {
        //
        $task = Task::findOrFail($id);
        $task->fill([
            'title' => $request->title,
            'project_id' => $request->projectList,
            ])->save();
        return redirect()->back();
    }

    public function check($id)
    {
        //
        $task = Task::findOrFail($id);
        $task->fill([
            'completed' => 1,
            ])->save();
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Task::findOrFail($id)->delete();
        return redirect()->back();
    }

    public  function charts()
    {
        $total = $this->task->total();
        $toDoCount = $this->task->toDoCount();
        $doneCount = $this->task->doneCount();
        $names = Project::pluck('name');
        $projects = Project::with('tasks')->get();
        // dd($projects);
        return view('tasks.charts', compact('total', 'toDoCount', 'doneCount', 'names', 'projects'));
    }

    public function searchApi()
    {
        return Auth::user()->tasks;
        
    }
}
