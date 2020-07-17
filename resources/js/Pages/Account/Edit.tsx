import React from "react";
import Profile from "@/Organisms/Profile";
import { AppLayout } from '@/Layouts/AppLayout';

export default function Create() {
    return (
        <AppLayout heading="My account">
            <Profile />
        </AppLayout>
    );
}
