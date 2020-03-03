import React from 'react';


interface Props {
    children: React.ReactChildren
    size: "small" | "medium" | "large"
}

export default function Button({children, size}: Props) {

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
        <button type="button" className={styling}>{children}</button>
    );
}
