<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;
use App\Permission;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('role:admin');
        $this->middleware('ability:admin,edit_user',['only'=>'update']);
        $this->middleware(['ability:admin,delete_role', 'protect.admin.role'],['only'=>'destroy']);
    }

    public function index()
    {
        $roles = Role::with('perms')->get();
        $perms = Permission::get();
        return view('auth.roles.index', compact('roles', 'perms'));
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
    public function store(Request $request)
    {
        $role = Role::create([
                'name'=>$request->name,
                'display_name'=>$request->display_name,
                'description'=>$request->description,
            ]);
        if ($request->perm) {
            $role->attachPermissions($request->perm);
        }
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
        //
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
    public function update(Request $request, $id)
    {
        $role = Role::findOrFail($id);
        if ($role->name !== 'admin') {
            $role->name = $request->name;
        }
        $role->display_name = $request->display_name;
        $role->description = $request->description;
        $role->save();
        $role->savePermissions($request->perm);
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
        $role = Role::findOrFail($id);
        $role->delete();           
        return redirect()->back();

    }
}
