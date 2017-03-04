<?php 
namespace App\Repositories;

use Image;
use App\Project;
/**
 * 
 */
 class ProjectsRepository
 {
 	public function newProject($request)
 	{
        //保存新建的项目
        $request->user()->projects()->create([
            'name'=>$request->name,
            'thumbnail'=>$this->thumbnail($request),
            ]);
 	}
    public function thumbnail($request)
    {
        if($request->hasFile('thumbnail'))
        {
            $file = $request->thumbnail;
            $name = str_random(10) . '.jpg';
            $path = public_path() . '/thumbnails/' . $name;
            $img = Image::make($file)->resize(262.7, 150)->save($path); //resize 压缩， fit 裁剪
            // $size = $img->filesize();
            // dd($size);
            return $name;
        }

    }

    public function updateProject($request, $id)
    {
        $project = Project::findOrFail($id);
        $project->name = $request->name;
        if($request->hasFile('thumbnail'))
        {
            $project->thumbnail = $this->thumbnail($request);
        }
        $project->save();
    }
 
 } 



 ?>