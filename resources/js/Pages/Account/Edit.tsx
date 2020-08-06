import React from "react";
import Profile from "@/Organisms/Profile";
import { AppLayout } from "@/Layouts/AppLayout";
import Card from "@/Molecules/Card";

export default function Create() {
    return (
        <AppLayout heading="My account">
            <Card header="Update your basic account details">
                <Profile />
            </Card>
        </AppLayout>
    );
}
