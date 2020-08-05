import React from "react";

interface Props {
    content: string;
    type: "h1" | "h2" | "h3";
}

export default function Heading({ content, type }: Props) {
    return (
        <div className="box-border p-4 border-4 border-gray-400 bg-gray-200">
            {type === "h1" && (
                <h1 className="font-mono text-4xl text-gray-800 text-center">
                    {content}
                </h1>
            )}
            {type === "h2" && (
                <h2 className="font-mono text-3xl text-gray-800 text-center">
                    {content}
                </h2>
            )}
            {type === "h3" && (
                <h3 className="font-mono text-2xl text-gray-800 text-center">
                    {content}
                </h3>
            )}
        </div>
    );
}
