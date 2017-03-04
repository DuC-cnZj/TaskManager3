<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Carbon\Carbon;
use Mail;
use App\User;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Carbon::setLocale('zh');

        User::created(function ($user) {
        //邮件
        Mail::send('emails.welcome', ['user' => $user], function ($message) use($user) {
            $message->from('1025434218@qq.com', 'Mr.Du');
        
            $message->to($user->email, $user->name);
                
            $message->subject('welcome to your TaskManager!');
                
        });

        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
