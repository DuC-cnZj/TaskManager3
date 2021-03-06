<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @yield('customHeader')

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'TaskManager') }}</title>

    <!-- Styles -->
    {{-- <script src="{{ asset('js/jquery.min.js') }}"></script> --}}
    <link href="{{asset('css/css/font-awesome.css')}}" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/animate.css') }}" rel="stylesheet">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon" />
    
    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-default navbar-static-top navbar-inverse">
            <div class="container">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a class="navbar-brand" href="{{ url('/') }}">
                        {{ config('app.name', 'TaskManager') }}
                    </a>                    
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                      <li>{{ link_to_route('tasks.index', '所有任务') }}</li>
                      <li>{{ link_to_route('tasks.charts', '图表统计') }}</li>

                      @role('admin')
                      <li class="dropdown">
                            <a href="#" class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">用户权限管理
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                            <li>{{ link_to_route('roles.index', '角色权限') }}</li>
                            <li>{{ link_to_route('user.index', '用户概览') }}</li>
                            </ul>
                      </li>
                      @endrole
                    </ul>
                @if(Auth::user())
                    <search></search>
                @endif
 

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Authentication Links -->
                        @if (Auth::guest())
                            <li><a href="{{ route('login') }}">Login</a></li>
                            <li><a href="{{ route('register') }}">Register</a></li>
                        @else
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            Logout
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        @endif
                    </ul>
                </div>
            </div>
        </nav>

    
   
        @yield('content')

 
        <div class="clearfix">
        <footer class="footer navbar-fixed-bottom navbar-inverse">
            <div class="container">
                @if(Auth::user())
                    当前有{{ $total }}个任务，已完成{{ $doneCount }}个，未完成{{ $toDoCount }}个。
                @endif
            </div>
        </footer>
        </div>
    </div>

   
    <!-- Scripts -->
    <script src="{{ asset('js/jquery.min.js') }}"></script>
    @yield('customJS') 
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/vue.js') }}"></script> 
    <script src="{{ asset('js/search.js') }}"></script> 

</body>
</html>
