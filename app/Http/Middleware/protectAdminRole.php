<?php

namespace App\Http\Middleware;

use Closure;
use App\Role;

class protectAdminRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $id = $request->route('role'); 
        $role = Role::findOrFail($id);       
        if ($role->name !== 'admin') {
            return $next($request);
        }
        return redirect()->back();
    }
}
