import React from "react";
import {InertiaLink} from '@inertiajs/inertia-react';

const Show: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-md">
                <p className="mb-8">This is the dashboard that an authenticated user will see upon login and successful registration.</p>
                <p className="mb-8">Eventually this will show the user a short summary of their profiles (mentor/mentee) as well as summary details of the mentorships they are involved in.</p>
                <p className="mb-8">For now you can use this link to view the users /profiles page:</p>

                <p><InertiaLink href="/profiles" className="text-blue-500">Profiles</InertiaLink></p>
            </div>
        </div>
    );
};

export default Show;
