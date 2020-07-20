import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import ProfileMenteeSection from "@/Organisms/ProfileMenteeSection";
import ProfileMentorSection from "@/Organisms/ProfileMentorSection";
import { AppLayout } from '@/Layouts/AppLayout';

interface IProps {
    heading?: string;
    user: {
        name: string;
        email: string;
        handle?: string;
    };
    mentorProfile?: {
        id: number;
        mentoring_experience: string;
        interests?: string;
        skillset?: string;
        suitable_time?: string;
        extra_info?: string;
        status?: number;
    };
    menteeProfile?: {
        id: number;
        current_status: string;
        previous_experience: string;
        interests: string;
        specific_interests: string;
        mentoring_type?: string;
        timeframe?: string;
        suitable_time?: string;
        extra_info?: string;
        status?: number;
    };
}

const Show = ({ user, mentorProfile, menteeProfile }: IProps) => {


    return (
        <AppLayout heading="Welcome to CodeHub Mentorships">

            <div className="flex flex-col">
                <div className="mx-auto rounded-md p-6 bg-gray shadow border w-full mb-12 flex flex-col bg-gray-100">
                    <div className=" flex w-full md:w-1/3 justify-center mx-auto mb-6 text-sm text-gray-900">
                        <p className="flex w-1/2 justify-start">Name: </p>
                        <p className="flex w-1/2 justify-start">{user.name}</p>
                    </div>
                    <div className="flex w-full md:w-1/3 justify-center test-center w-1/2 mx-auto mb-6 text-sm text-gray-900">
                        <p className="flex w-1/2 justify-start">Email:</p>
                        <p className="flex w-1/2 justify-start">{user.email}</p>
                    </div>
                    <div className="flex w-full md:w-1/3 justify-center mx-auto mb-2 text-sm text-gray-900">
                        <p className="flex w-1/2 justify-start">
                            Slack Handle:{" "}
                        </p>
                        <p className="flex w-1/2 justify-start">Test</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row mb-12 lg:mb-24">
                    <div className="lg:w-1/2 w-full bg-gray-100">
                        <div className="rounded-md p-6 bg-gray shadow border">
                            {menteeProfile ? (
                                <div>
                                    <ProfileMenteeSection
                                        heading="Mentee profile"
                                        menteeProfile={menteeProfile}
                                    />
                                </div>
                            ) : (
                                <div className="mb-2 flex flex-col">
                                    <h3 className="text-sm text-gray-900 mb-6 py-2 text-center">
                                        Are you interested in becomeing a mentee
                                        and learn new skills? If so, please
                                        complete your mentee profile
                                    </h3>
                                    <InertiaLink
                                        href="/profiles/mentee/new"
                                        className="text-blue-500"
                                    >
                                        <button
                                            type="button"
                                            className="block mx-auto px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                                        >
                                            {" "}
                                            Mentee form
                                        </button>
                                    </InertiaLink>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full lg:ml-4 lg:mt-0 ml-0 mt-12 bg-gray-100">
                        <div className="rounded-md p-6 bg-gray shadow border">
                            {mentorProfile ? (
                                <div>
                                    <ProfileMentorSection
                                        heading="Mentor profile"
                                        mentorProfile={mentorProfile}
                                    />
                                </div>
                            ) : (
                                <div className="mb-2 flex flex-col">
                                    <h3 className="text-sm text-gray-900 mb-6 py-2 text-center">
                                        Are you interested in mentoring people
                                        and sharing your knowledge? If so,please
                                        complete your mentor profile
                                    </h3>
                                    <InertiaLink
                                        href="/profiles/mentor/new"
                                        className="text-blue-500"
                                    >
                                        <button
                                            type="button"
                                            className="block mx-auto px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                                        >
                                            Mentor form
                                        </button>
                                    </InertiaLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Show;
