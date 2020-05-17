import React from "react";
import MenteeForm from "@/Organisms/MenteeForm";
import FormLayout from "@/Atoms/FormLayout";

export default function Index() {
    return (
        <div>
            <FormLayout
                heading="Mentee Form"
                message="Please fill out the questionnaire below if you are interested in finding someone to mentor you"
            >
                <MenteeForm />
            </FormLayout>
        </div>
    );
}
