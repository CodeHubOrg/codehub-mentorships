import React from "react";

export default function Index() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="mb-8">This page will summarise the profiles (mentor/mentee) for the logged in user including the profile status (in review, approved etc).</p>
            <p>Refer to App\Http\Controllers\Profiles\MenteeProfileController for more information</p>
        </div>
    );
}
