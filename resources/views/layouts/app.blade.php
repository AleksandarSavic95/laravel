<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        @include('layouts.header')

        <main class="py-4">
            @yield('content')
        </main>

        @include('layouts.footer')
    </div>

    <!-- <script src="{{ asset('js/zdravstvena/util.js') }}"></script>
    <script src="{{ asset('js/zdravstvena/osobe/osoba.js') }}"></script>
    <script src="{{ asset('js/zdravstvena/osobe/pacijent.js') }}"></script>
    <script src="{{ asset('js/zdravstvena/osobe/doktor.js') }}"></script>
    <script src="{{ asset('js/zdravstvena/pregledi/pregled.js') }}"></script>
    <script src="{{ asset('js/zdravstvena/pregledi/secer.js') }}"></script>
    <script src="{{ asset('js/zdravstvena/pregledi/holesterol.js') }}"></script>
    <script src="{{ asset('js/zdravstvena/pregledi/pritisak.js') }}"></script>
    <script src="{{ asset('js/zdravstvena/test.js') }}"></script> -->

    <script src="{{ asset('js/zdravstvena/bundle.js') }}"></script>


    <!-- scope testing scripts START --

    <script src="{{ asset('js/b4.js') }}"></script>

    <script src="{{ asset('js/scope-test.js') }}"></script>

    <script>
        var script = 'script';
        console.log('~~~~ script ~~~~');
        console.log(b4);
        // console.log(inside); // ReferenceError
        // console.log(after); // ReferenceError
        console.log(out);
        console.log(script);
        console.log('~~~~ /script ~~~~');
    </script>

    <script src="{{ asset('js/after.js') }}"></script>

    <script src="{{ asset('js/arrays-objects.js') }}"></script>
    <script src="{{ asset('js/classes.js') }}"></script>
    <script src="{{ asset('js/promises-callbacks.js') }}"></script>
    
    <! -- scope testing scripts END -->
</body>
</html>
