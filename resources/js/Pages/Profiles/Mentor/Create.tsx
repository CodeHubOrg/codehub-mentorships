import React from "react";
import MentorForm from "@/Organisms/MentorForm";
import FormLayout from "@/Atoms/FormLayout";

export default function Create() {
    return (
        <div>
            <FormLayout
                heading="Mentor Form"
                message="Please fill out the questionnaire below if you are interested in finding someone to mentor you"
            >
                <MentorForm />
            </FormLayout>
        </div>
    );
}
