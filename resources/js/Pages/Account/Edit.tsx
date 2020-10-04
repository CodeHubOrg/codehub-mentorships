import React from "react";
import Profile from "@/Organisms/Profile";
import { AppLayout } from "@/Layouts/AppLayout";
import Card from "@/Molecules/Card";

export default function Create() {
    return (
        <AppLayout>
            <h1 className="text-3xl font-semibold leading-tight text-gray-900 mb-8">
                My account
            </h1>
            <h2 className="text-lg text-gray-600 mb-8">
                Update your basic profile details
            </h2>
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-8">
                    <Card>
                        <Profile />
                    </Card>
                </div>
                <div className="hidden col-span-4 lg:block">
                    <img
                        src="/img/updates.svg"
                        alt="Cartoon characters performing abstract updates to an interface"
                    />
                </div>
            </div>
        </AppLayout>
    );
}
