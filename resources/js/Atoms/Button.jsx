import React from 'react';

export default function Button({content, size}) {

    let styling;

    switch (size) {
        case "small":
            styling = "bg-blue-700";
        break;
        case "medium":
            styling = "bg-green-700";
        break;
        default:
            styling = "";
    }

    return (
        <button className={styling}>{content}</button>
    );
}
