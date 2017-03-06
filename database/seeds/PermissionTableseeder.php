<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Permission;
use App\Role;
use Illuminate\Support\Facades\Hash;

class PermissionTableseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        //清空权限相关数据表
        Permission::truncate();
        Role::truncate();
        User::truncate();
        DB::table('role_user')->delete();
        DB::table('permission_role')->delete();

    	DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        //创建初识管理员用户
        $duc = User::create([
        	'name'=>'duc',
        	'email'=>'1025434218@qq.com',
        	'password' => Hash::make('secret')
        	]);

        //创建初始角色
        $admin = Role::create([
        	'name'=>'admin',
        	'display_name'=>'管理员',
        	'description'=>'super admin role',
        	]);

        //创建相应的初始权限
        $permissions = [
        	[
        		'name' => 'create_user',
        		'display_name'=>'创建用户',
        	],
        	[
        		'name' => 'edit_user',
        		'display_name'=>'编辑用户',
        	],
        	[
        		'name' => 'delete_user',
        		'display_name'=>'删除用户',
        	],
        ];

        foreach ($permissions as $permission) {
        	$manage_user = Permission::create($permission);
	        //给角色权限
	        $admin->attachPermission($manage_user);

        }

        $manage_user = Permission::create([
        	'name'=>'manage_user',
        	'display_name'=>'用户管理',
        	'description'=>'管理用户权限',
        	]);

        //给用户角色
        $duc->attachRole($admin);
    }
}
