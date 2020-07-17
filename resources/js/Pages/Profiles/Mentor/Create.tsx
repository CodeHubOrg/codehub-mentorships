import React from "react";
import MentorForm from "@/Organisms/MentorForm";
import { AppLayout } from '@/Layouts/AppLayout';

export default function Create() {
    return (
        <AppLayout heading="Mentor Form">
            <MentorForm />
        </AppLayout>
    );
}
