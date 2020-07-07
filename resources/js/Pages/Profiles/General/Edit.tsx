import React from "react";
import Profile from "@/Organisms/Profile";
import FormLayout from "@/Atoms/FormLayout";

export default function Create() {
    return (
        <div>
            <FormLayout
                heading="Profile Form"
                message="Update your user profile"
            >
                <Profile />
            </FormLayout>
        </div>
    );
}
