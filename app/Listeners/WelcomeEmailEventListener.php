<?php

namespace App\Listeners;

use App\Events\WelcomeEmail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Mail;

class WelcomeEmailEventListener implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */


    public function __construct()
    {
    }

    /**
     * Handle the event.
     *
     * @param  WelcomeEmail  $event
     * @return void
     */
    public function handle(WelcomeEmail $event)
    {
        //
        $user = $event->user;
        //邮件
        Mail::send('emails.welcome', ['user' => $user], function ($message) use($user) {
            $message->from('1025434218@qq.com', 'Mr.Du');
        
            $message->to($user->email, $user->name);
                
            $message->subject('welcome to your TaskManager!');
                
        });
    }
}
