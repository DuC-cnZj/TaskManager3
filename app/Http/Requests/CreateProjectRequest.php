<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:projects',
            'thumbnail' => 'image|dimensions:min_width=250,min_height=150'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => '名字必填！',
            'name.unique' => '已经有啦，请换一个！',
            'thumbnail.image'  => '请上传图片文件',
            'thumbnail.dimensions'  => '大小不对！',
        ];
    }
}
