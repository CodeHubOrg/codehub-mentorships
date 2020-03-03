import React from 'react';

interface Props {
    content: string
}

export default function Heading({content}: Props) {

    return (
        <div className="box-border p-4 border-4 border-gray-400 bg-gray-200">
            <h1 className="font-mono text-lg text-gray-800 text-center">{content}</h1>
        </div>
    );
}
