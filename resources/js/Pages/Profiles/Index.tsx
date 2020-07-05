import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import FormLayout from "@/Atoms/FormLayout";
import ProfileMenteeSection from "@/Organisms/ProfileMenteeSection";
import ProfileMentorSection from "@/Organisms/ProfileMentorSection";

export interface IProps {
    heading?: string;
    mentor_profile?: {
        id: number;
        mentorexp: string;
        interests?: string;
        skillsets?: string;
        suitabletime?: string;
        extrainfo?: string;
        status?: string;
    };
    mentee_profile?: {
        id: number;
        currentstatus: string;
        previousexp: string;
        mentortype?: string;
        timeframe?: string;
        suitabletime?: string;
        extrainfo?: string;
        status?: string;
    };
}

const Index = ({ heading, mentor_profile, mentee_profile }: IProps) => {
    return (
        <div>
            <FormLayout heading={heading} message="You are logged in.">
                <>
                    {/* TODO add information from registration: Name, email, Slack Handle */}
                    {mentee_profile ? (
                        <div>
                            <ProfileMenteeSection
                                heading="Mentee profile"
                                mentee_profile={mentee_profile}
                            />
                        </div>
                    ) : (
                        <p>
                            If you would like to find a mentor, please fill out
                            the
                            <InertiaLink
                                href="/profiles/mentee/new"
                                className="text-blue-500"
                            >
                                <br />
                                Mentee form
                            </InertiaLink>
                            .
                        </p>
                    )}
                    <p>&nbsp;</p>

                    {mentor_profile ? (
                        <div>
                            <ProfileMentorSection
                                heading="Mentor profile"
                                mentor_profile={mentor_profile}
                            />
                        </div>
                    ) : (
                        <p>
                            If you would like to sign up as a mentor, please
                            fill out the
                            <InertiaLink
                                href="/profiles/mentor/new"
                                className="text-blue-500"
                            >
                                <br />
                                Mentor form
                            </InertiaLink>
                            .
                        </p>
                    )}

                    <p>&nbsp;</p>
                    <InertiaLink
                        href="/logout"
                        method="post"
                        className="text-blue-500"
                    >
                        Log out
                    </InertiaLink>
                    <p>&nbsp;</p>
                </>
            </FormLayout>
        </div>
    );
};

export default Index;
