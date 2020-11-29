<div class="relative bg-gray-50 overflow-hidden">
    <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div class="relative h-full max-w-screen-xl mx-auto">
            <svg class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404"
                 height="784" fill="none" viewBox="0 0 404 784">
                <defs>
                    <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20"
                             patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
                class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                width="404" height="784" fill="none" viewBox="0 0 404 784">
                <defs>
                    <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20"
                             patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
            </svg>
        </div>
    </div>

    <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
            <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
                <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                    <div class="flex items-center justify-between w-full md:w-auto">
                        <a href="/" aria-label="Home">
                            <img class="h-8 w-auto sm:h-10" src="/img/codehub.svg" alt="Logo">
                        </a>
                        <div class="-mr-2 flex items-center md:hidden">
                            <button type="button"
                                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                    id="main-menu" aria-label="Main menu" aria-haspopup="true" onclick="toggle()">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="hidden md:flex md:space-x-10">
                    <a href="#"
                       class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">About
                        CodeHub</a>
                    <a href="/register"
                       class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Register</a>
                </div>
                <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span class="inline-flex rounded-md shadow">
              @if(auth()->check())
                  <a href="/dashboard"
                     class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out">
                    My account
                  </a>
              @else
                  <a href="/login"
                     class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out">
                    Log in
                    </a>
              @endif

          </span>
                </div>
            </nav>
        </div>

        <!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md">
                <div class="rounded-lg bg-white shadow-xs overflow-hidden hidden" role="menu" aria-orientation="vertical"
                     aria-labelledby="main-menu" id="menu">
                    <div class="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <img class="h-8 w-auto" src="/img/codehub.svg" alt="">
                        </div>
                        <div class="-mr-2">
                            <button type="button"
                                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                    aria-label="Close menu" onclick="toggle()">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="px-2 pt-2 pb-3">
                        <a href="#"
                           class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                           role="menuitem">About CodeHub</a>
                        <a href="/register"
                           class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                           role="menuitem">Register</a>
                    </div>
                    <div>
                        @if(auth()->check())
                            <a href="/dashboard"
                               class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                               role="menuitem">
                                My account
                            </a>
                        @else
                            <a href="/login"
                               class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                               role="menuitem">
                                Log in
                            </a>
                        @endif
                    </div>
                </div>
            </div>
        </div>
        <main class="mt-14 mx-auto max-w-screen-xl px-4">
            <div class="w-4/5 m-auto">
                <h2 class="mb-16 mt-10 max-w-md mx-auto text-center text-xl font-extrabold text-gray-900 sm:text-xl md:text-3xl md:max-w-3xl md:mt-0">
                    CodeHub Mentorships- Privacy Notice
                </h2>
                <h2 class=" max-w-md mx-auto text-xl font-bold text-gray-900 sm:text-xl md:text-2xl md:max-w-3xl">
                    About CodeHub Bristol
                </h2>
                <p class="mt-2 max-w-md mx-auto text-base text-gray-500 sm:text-base md:mt-2 md:text-lg md:max-w-3xl">
                    CodeHub (“we”) is a place to code, share, and learn from one another. Generally we do not
                    hold any personal information on our members as we operate through regular Meetup
                    events where Meetup is both the data controller and data processor.
                </p>
                <p class="mt-2 max-w-md mx-auto text-base text-gray-500 sm:text-base md:mt-2 md:text-lg md:max-w-3xl">
                    Twice yearly, we organise a mentorship scheme and, for those who sign up to the scheme,
                    we collect personal information. This Privacy Notice relates to the mentorship scheme only.
                </p>
                <h2 class="mt-6 max-w-md mx-auto text-xl font-bold text-gray-900 sm:text-xl md:text-2xl md:max-w-3xl">
                    What type of information we hold and how we use it
                </h2>
                <p class="mt-2 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-base md:mt-2 md:text-lg md:max-w-3xl">
                    We hold email addresses for those who have signed up to the scheme and use these to
                    communicate relevant information to participants, including forthcoming meetings.
                </p>
                <p class="mt-2 max-w-md mx-auto text-base text-gray-500 sm:text-base md:mt-2 md:text-lg md:max-w-3xl">
                    We also collect information about participants’ skills, experiences and career aspirations, as
                    shared with us via forms completed by the participants. This is used to pair up mentors and
                    mentees.    
                </p>
                <p class="mt-2 max-w-md mx-auto text-base text-gray-500 sm:text-base md:mt-2 md:text-lg md:max-w-3xl">
                    The basis on which we hold the data is ‘legitimate interests’.
                </p>
                <h2 class="mt-6 max-w-md mx-auto text-xl font-bold text-gray-900 sm:text-xl md:text-2xl md:max-w-3xl">
                    How we store the information
                </h2>
                <p class="mt-2 max-w-md mx-auto text-base text-gray-500 sm:text-base md:mt-2 md:text-lg md:max-w-3xl">
                    The data is stored securely in the cloud and is only available to the organisers of the
                    scheme. At the end of each scheme, all personal information is deleted within 3 months, ie
                    after a period of evaluating any learnings from the scheme.
                </p>
                <p class="mt-2 max-w-md mx-auto text-base text-gray-500 sm:text-base md:mt-2 md:text-lg md:max-w-3xl">
                    We do not share your information with any other party.
                </p>
                <h2 class="mt-6 max-w-md mx-auto text-xl font-bold text-gray-900 sm:text-xl md:text-2xl md:max-w-3xl">
                    Your data protection rights
                </h2>
                <p class="mt-2 max-w-md mx-auto text-base text-gray-500 sm:text-base md:mt-2 md:text-lg md:max-w-3xl">
                    You have the right to ask what data we hold about you and to ask for it to be amended or
                    removed. Doing so, may mean that you no longer participate in the scheme.
                </p>
                <p class="mt-2 max-w-md mx-auto text-base text-gray-500 sm:text-base md:mt-2 md:text-lg md:max-w-3xl">
                    Please direct any questions about your data to mentoring@codehub.org.uk
                </p>
                <h2 class="mt-6 max-w-md mx-auto text-xl font-bold text-gray-900 sm:text-xl md:text-2xl md:max-w-3xl">
                    How to complain
                </h2>
                <p class="mt-2 max-w-md mx-auto text-base text-gray-500 sm:text-base md:mt-2 md:text-lg md:max-w-3xl">
                    You can also complain to the Information Commissioner’s Office if you are unhappy with
                    how we have used your data. The ICO’s address: Wycliffe House, Water Lane, Wilmslow,
                    Cheshire, SK9 5AF
                </p>
                
            </div>
        </main>
    </div>
</div>