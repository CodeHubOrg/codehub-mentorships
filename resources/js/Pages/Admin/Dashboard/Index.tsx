{/*import React from "react";
import Heading from "@/Atoms/Heading";
import Button from "@/Atoms/Button";
import Card from "@/Molecules/Card";
import SampleForm from "@/Organisms/SampleForm";
import AuthLayout from "@/Atoms/AuthLayout";
import { Textarea } from "@/Atoms/Textarea";

interface Props {
	message: React.ReactChildren;
	button: React.ReactChildren;
}

export default function Index({ message, button }: Props) {
	return (
		<div>
			<AuthLayout heading="Auth Layout" message="">
				<SampleForm />
				<p>&nbsp;</p>
				<p>&nbsp;</p>

				<Heading type="h3">{message}</Heading>
				<Card heading="Card heading" hasPadding={true} />
				<Button size="medium">{button}</Button>
				<Textarea placeholder="text area" />
			</AuthLayout>
		</div>
	);
}
*/}


import React from "react";
import MentorForm from "@/Organisms/MentorForm";
import FormLayout from "@/Atoms/FormLayout";



interface Props {
    message: React.ReactChildren;
    button: React.ReactChildren;
}

export default function Index({  }: Props) {
    return (
        <div>
            <FormLayout heading="Mentor Form" message="Please fill out the questionnaire below if you are interested in finding someone to mentor you">
                <MentorForm />
            </FormLayout>
        </div>
    );
}