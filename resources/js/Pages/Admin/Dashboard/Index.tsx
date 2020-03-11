import React from 'react';
import Heading from '@/Atoms/Heading';
import Button from '@/Atoms/Button';

interface Props {
    message: string;
    button: React.ReactChildren;
}

export default function Index({message, button}: Props) {

    return (
        <div>
            <Heading content={message}/>
                <div className="container mx-auto p-5">
                    <Button size="medium">
                        {button}
                    </Button>
                </div>
                <div className="container mx-auto p-5">
                <Button size="small">
                    {button}
                </Button>
                </div>
        </div>
    );
}
