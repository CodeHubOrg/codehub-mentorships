import React from 'react';


interface Props {
    children: React.ReactChildren
    size: "small" | "medium" | "large"
}

export default function Button({children, size}: Props) {

    let styling;
    switch (size) {
        case "small":
            styling = "inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-small rounded-md text-white bg-red-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150";
        break;
        case "medium":
            styling = "inline-flex items-center px-8 py-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150";
        break;
        default:
            styling = "";
    }

    return (
        <button type="button" className={styling}>{children}</button>
    );
}
