import React from "react";
import MentorForm from "@/Organisms/MentorForm";
import { AppLayout } from "@/Layouts/AppLayout";
import Card from "@/Molecules/Card";

export default function Create() {
    return (
        <AppLayout heading="Create your mentor profile">
            <Card header="Please fill out the questionnaire below if you are interested in finding someone to mentor">
                <MentorForm />
            </Card>
        </AppLayout>
    );
}
