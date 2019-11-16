<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
     <link rel="stylesheet" href="{{asset('CSS/bootstrap.min.css')}}">
     <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,400,500,600,700&display=swap" rel="stylesheet"> 
     <link rel="stylesheet" href="{{asset('CSS/style.css')}}">

    <title>@yield('title')</title>
  </head>
  <body>
    

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    @yield('container')
    <script src="{{asset('JS/jquery-3.4.1.min.js')}}"></script>
    <script src="{{asset('JS/popper.min.js')}}"></script>
    <script src="{{asset('JS/bootstrap.min.js')}}"></script>
  </body>
</html>