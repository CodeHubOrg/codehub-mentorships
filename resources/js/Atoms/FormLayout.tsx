import React from "react";

interface Props {
    children: React.ReactNode;
    heading: string;
    message: string;
}

export default function FormLayout({ children, heading, message }: Props) {
    return (
        <>
            <div className="box-border p-4 border-4 border-gray-400 bg-gray-200">
                <h1 className="text-2xl text-gray-800 text-center font-extrabold">
                    CodeHub Mentorship App
                </h1>
            </div>
            <div className="min-h-screen bg-gray-50  flex flex-col py-12 sm:px-6 lg:px-20">
                <div className="bg-white py-2 px-19 shadow sm:rounded-lg sm:px-20">
                    <h2 className="mb-6 text-3xl leading-9 font-extrabold text-gray-900 p-4 text-center">
                        {heading}
                    </h2>
                    <p className="mb-6 text-1xl font-semibold leading-5 text-gray-800 max-w p-19">
                        {message}
                    </p>
                    {children}
                </div>
            </div>
        </>
    );
}
