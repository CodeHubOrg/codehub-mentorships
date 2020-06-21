import React from "react";
import Profile from "@/Organisms/Profile";
import FormLayout from "@/Atoms/FormLayout";

export default function Create() {
    return (
        <div>
            <FormLayout
                heading="Profile Form"
                message="Please fill out the questionnaire below if you are interested in finding someone to mentor you"
            >
                <Profile />
            </FormLayout>
        </div>
    );
}
