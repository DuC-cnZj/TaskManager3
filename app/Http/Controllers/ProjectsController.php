<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\ProjectsRepository;
use Image;
use App\Http\Requests\CreateProjectRequest;
use App\Http\Requests\EditProjectRequest;
use App\Project;
use Auth;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    protected $repo;

    public function __construct(ProjectsRepository $repo)
    {
        $this->repo = $repo;
    }

    public function index()
    {
        //
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
    public function store(CreateProjectRequest $request)
    {
        $this->repo->newProject($request);
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
        // return Carbon::createFromDate(1996, 3 ,19)->age;
        // var_dump(Carbon::createFromDate(1975, 5, 21)->age);
        // dd($id);
        // $project = Auth::user()->projects()->where('name', $name)->first();
        // $toDo = Task::findOrFail($id)->where('completed', 0)->get();
        $toDo = project::findOrFail($id)->tasks()->where('completed', 0)->orderBy('updated_at', 'desc')->get();
        $Done = project::findOrFail($id)->tasks()->where('completed', 1)->orderBy('updated_at', 'desc')->get();
        $projects = Project::pluck('name', 'id');
        // dd($projects);
        return view('projects.show', compact('toDo', 'Done', 'projects'))->with('project_id', $id);
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
    public function update(EditProjectRequest $request, $id)
    {
        //
        $this->repo->updateProject($request, $id);
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
        Project::findOrFail($id)->delete();
        return  redirect()->back();
    }
}
