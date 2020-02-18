import React from 'react';

export default function Button({content}) {

    return (
        <button
            className="p-10 transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ...">
            {content}
        </button>
    );
}
