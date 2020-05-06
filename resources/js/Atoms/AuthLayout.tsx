import React from "react";

interface Props {
    children: React.ReactNode;
    heading: string;
    message: string;
}

export default function AuthLayout({ children, heading, message }: Props) {
    return (
        <>
            <div className="box-border p-4 border-4 border-gray-400 bg-gray-200">
                <h1 className="text-2xl text-gray-800 text-center font-extrabold">
                    CodeHub Mentorship App
                </h1>
            </div>
            <div className="min-h-screen bg-gray-50 flex flex-col py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900 p-4">
                        {heading}
                    </h2>
                    <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                        {message}
                    </p>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
