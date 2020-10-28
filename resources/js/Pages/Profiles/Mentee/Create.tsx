import React from "react";
import MenteeForm from "@/Organisms/MenteeForm";
import { AppLayout } from "@/Layouts/AppLayout";
import Card from "@/Molecules/Card";

export default function Create() {
    return (
        <AppLayout>
            <h1 className="text-3xl font-semibold leading-tight text-gray-900 mb-8">
                Create a mentee profile
            </h1>
            <h2 className="text-lg text-gray-600 mb-8">
                Please fill out the questionnaire below if you are interested in
                finding someone to mentor you
            </h2>
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-8">
                    <Card>
                        <MenteeForm />
                    </Card>
                </div>
                <div className="hidden col-span-4 lg:block">
                    <img
                        src="/img/mentee.svg"
                        alt="Mentee cartoon illustration"
                    />
                </div>
            </div>
        </AppLayout>
    );
}
