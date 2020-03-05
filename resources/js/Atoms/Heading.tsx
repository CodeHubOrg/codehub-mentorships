import React from 'react';

interface Props {
    children: React.ReactChildren;
    type:"h1" | "h2" | "h3";
}

export default function Heading({children,type}: Props) {

    return (
        <div className="box-border p-4 border-4 border-gray-400 bg-gray-200">
            {type === "h1" && <h1 className="font-mono text-4xl text-gray-800 text-center">{children}</h1> }
            {type === "h2" && <h2 className="font-mono text-3xl text-gray-800 text-center">{children}</h2> }
            {type === "h3" && <h3 className="font-mono text-2xl text-gray-800 text-center">{children}</h3> }
        </div>
    );
}
