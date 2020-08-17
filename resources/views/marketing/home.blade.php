@extends('marketing')

@section('content')
  <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"> 

  	<div class="ml-3 relative">  
                                   
	    <div class="origin-top-right absolute right-0 mt-2 w-120">
            <div class="inline-block px-5 py-8 font-medium text-indigo-600 pt-5 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
			  <a class="text-lg" href="/login">Login</a>
			</div>

			<div class="inline-block px-5 py-8 font-medium text-indigo-600 pt-5 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
				 <a class="text-lg" href="/register">Register</a>
			</div>
        </div>
       
    </div>

    <div class="py-16  overflow-hidden lg:py-24">

    <div class="relative">
    	 <h3 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 sm:mt-10">
    	 							<!-- Welcome to <br /> -->
	        Mentorships @ <img   
				style="margin: 10px auto"
	            class="block h-12 w-185"
	            src="/img/codehub.svg"
	            alt="Code Hub logo"
	        />
	    </h3>	                  
    </div>

    <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div class="relative">
        <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
          Welcome
        </h4>
        <p class="mt-3 text-lg leading-7 text-gray-700">
          Since 2018, we have been running a mentoring scheme for web and software development in Bristol.  
        </p>

        <p class="mt-3 text-lg leading-7 text-gray-700">
	 	  This site will host mentor and mentee profiles, making it easier to make pairings between the two. 
        </p>

      </div>

      <div class="mt-10 relative lg:mt-0">
      	<h4 class="mt-10 text-xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-2xl sm:leading-9">
          Currently registered</h4>
         <ul class="mt-10">
          <li>
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">10
                </div>
              </div>
              <div class="ml-4">
                <p class="mt-3 text-lg leading-6 font-medium text-gray-900">mentors</p>
              </div>
            </div>
          </li>
          <li class="mt-10">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">15
                  </div>
              </div>
              <div class="ml-4">
                <p class="mt-3 text-lg leading-6 font-medium text-gray-900">mentees</p>
              </div>
            </div>
          </li>         
        </ul>

        <h4 class="mt-10 text-xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-2xl sm:leading-9">
          Technologies covered</h4>
	       <p class="mt-3 text-lg  font-medium text-gray-900">JavaScript, Python, ReactJS, PHP, MySQL</p>
    </div>
  </div>
</div>
@endsection
