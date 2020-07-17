import React from "react";
import MenteeForm from "@/Organisms/MenteeForm";
import { AppLayout } from '@/Layouts/AppLayout';

export default function Create() {
    return (
        <AppLayout heading="Mentee Form">
            <MenteeForm />
        </AppLayout>
    );
}
