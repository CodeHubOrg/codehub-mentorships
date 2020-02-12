import React from "react";

interface Props {
    message: string;
}

export default function Index({ message }: Props) {

    return (
        <div>{ message }</div>
    );
}
