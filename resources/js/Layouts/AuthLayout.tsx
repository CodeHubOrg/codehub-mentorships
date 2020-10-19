import React from "react";
import AuthBackground from '@/Molecules/AuthBackground';

interface Props{
    children: React.ReactNode,
    title: string
}

export default function AuthLayout({ children, title } : Props) {
    return (
        <div className="relative min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

            <div className="relative z-20 sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="block mx-auto h-8 w-auto"
                    src="/img/codehub.svg"
                    alt="Code Hub logo"
                />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    { title }
                </h2>
            </div>

            <div className="relative z-20 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                { children }
            </div>

            <AuthBackground />
        </div>
    );
}
