import React from 'react';

interface Props {
    children: React.ReactNode
}

export default function Button({children}: Props) {

    return (
        <button type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
            {children}
        </button>
    );
}
