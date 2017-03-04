<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>test email</title>
</head>
<body>
	<h1>Hi,{{ $user->name }}!</h1>
	<p>这是你的任务！</p>
	<p>邮箱是：{{ $user->email }}</p>
	{{-- $path = {{ asset() }} --}}
	{{-- <img src="{{ $message->embed($path) }}" alt=""> --}}
</body>
</html>