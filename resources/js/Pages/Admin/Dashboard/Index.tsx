import React from 'react';
import Heading from '@/Atoms/Heading';
import Button from '@/Atoms/Button';
import Card from '@/Molecules/Card'; 

interface Props {
    message: string;
    button: string;
}

export default function Index({message, button}: Props) {

    return (
        <div>
            <Heading content={message}/>
            <div className="container mx-auto p-20">
                <Button>
                    {button}
                </Button>
            </div>
            <Card heading="Card heading" hasPadding={true} />
        </div>
    );
}
