import React from "react";
import Heading from "@/Atoms/Heading";
import Button from "@/Atoms/Button";
import Card from "@/Molecules/Card";
import SampleForm from "@/Organisms/SampleForm";

interface Props {
    message: React.ReactChildren;
    button: React.ReactChildren;
}

export default function Index({ message, button }: Props) {
    return (
        <div>
            <Heading type="h3">
                {message}
            </Heading>
            <div className="container mx-auto p-20">
                <Button size="medium">{button}</Button>

                <Card heading="Card heading" hasPadding={true} />

                <p>&nbsp;</p>
                <p>&nbsp;</p>

                <SampleForm />
            </div>
        </div>
    );
}
