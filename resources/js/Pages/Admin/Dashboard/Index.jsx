import React from 'react';
import Heading from '@/Atoms/Heading';
import Button from '@/Atoms/Button';

export default function Index({message, button}) {

    return (
        <div>
            <Heading content={message}/>
            <div className="container mx-auto p-20">
                <Button content={button}/>
            </div>
        </div>
    );
}
