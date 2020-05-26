@extends('marketing')

@section('content')
    <div class="flex flex-col items-center justify-center min-h-screen">
        <p class="mb-8">This will eventually be the public homepage of the application.</p>
        <p>For now you can <a class="text-blue-500" href="{{ route('login') }}">login</a> or  <a class="text-blue-500" href="{{ route('register') }}">register</a></p>
    </div>
@endsection
