import React from "react";
import MenteeForm from "@/Organisms/MenteeForm";
import { AppLayout } from '@/Layouts/AppLayout';
import Card from '@/Molecules/Card';

export default function Create() {
    return (
        <AppLayout heading="Mentee Form">
            <Card header="Please fill out the questionnaire below if you are interested in finding someone to mentor you">
                <MenteeForm />
            </Card>
        </AppLayout>
    );
}
