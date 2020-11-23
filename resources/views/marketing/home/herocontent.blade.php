<main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
    <div class="text-center">
        <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            CodeHub
            <br class="xl:hidden">
            <span class="text-indigo-600">Mentorships</span>
        </h2>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Since 2018, we have run a mentoring scheme for web and software development in Bristol. If you're
            looking to find or become a mentor in our scheme we'd love to hear from you!
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            @if(!auth()->check())
            <div class="rounded-md shadow">
                <a href="/register"
                   class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Get started
                </a>
            </div>
            @endif
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="/about-mentorships"
                   class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Find out more
                </a>
            </div>
        </div>
    </div>
</main>
