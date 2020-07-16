import React, { FC, useRef, useState } from 'react';
import Transition from '@/Atoms/Transition';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import useOutsideClick from '@/Hooks/useOutsideClick';

interface Props {
    children: React.ReactNode;
    heading?: string;
}

export const AppLayout: FC<Props>  = ({children, heading}) => {

    const profileMenu = useRef();
    const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const { auth } = usePage();

    useOutsideClick(profileMenu, () => {
        setProfileDropdownVisible(false);
    });

    return (
        <div className="min-h-screen bg-white">
            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block lg:hidden h-8 w-auto" src="/img/codehub.svg"
                                     alt="Code Hub logo" />
                                <img className="hidden lg:block h-8 w-auto" src="/img/codehub.svg"
                                     alt="Code Hub logo" />
                            </div>
                            <div className="hidden sm:-my-px sm:ml-12 sm:flex">
                                <a href="#"
                                   className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                    Dashboard
                                </a>
                                <a href="#"
                                   className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                    My Mentorships
                                </a>
                                <a href="#"
                                   className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                    Contact CodeHub
                                </a>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <button
                                className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
                                aria-label="Notifications">
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>

                            <div className="ml-3 relative">
                                <div>
                                    <button
                                        onClick={() => setProfileDropdownVisible(! profileDropdownVisible)}
                                        className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                                        id="user-menu" aria-label="User menu" aria-haspopup="true">
                                        <img className="h-8 w-8 rounded-full"
                                             src={auth.user.avatar}
                                             alt="" />
                                    </button>
                                </div>

                                <Transition
                                    show={profileDropdownVisible}
                                    enter="transition ease-out duration-200"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <div ref={profileMenu} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <InertiaLink
                                                href="/profiles/general/edit"
                                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                            >
                                                Your Profile
                                            </InertiaLink>
                                            <InertiaLink
                                                method="DELETE"
                                                href="/logout"
                                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                            >
                                                Sign out
                                            </InertiaLink>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setMobileMenuVisible(! mobileMenuVisible)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg
                                    className={mobileMenuVisible ? 'hidden h-6 w-6' : 'block h-6 w-6'}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg
                                    className={mobileMenuVisible ? 'block h-6 w-6' : 'hidden h-6 w-6'}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={mobileMenuVisible ? 'block sm:hidden' : 'hidden sm:hidden'}>
                    <div className="pt-2 pb-3">
                        <a href="#"
                           className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">Dashboard</a>
                        <a href="#"
                           className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Mentorships</a>
                        <a href="#"
                           className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Contact CodeHub</a>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full"
                                     src={auth.user.avatar}
                                     alt="" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium leading-6 text-gray-800">{auth.user.name}</div>
                                <div className="text-sm font-medium leading-5 text-gray-500">{auth.user.email}</div>
                            </div>
                        </div>
                        <div className="mt-3" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                            <a href="#"
                               className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                               role="menuitem">Your Profile</a>
                            <a href="#"
                               className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                               role="menuitem">Sign out</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="py-10 bg-gray-50">
                <header>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900">
                            { heading }
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="px-4 py-8 sm:px-0">
                            { children }
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
