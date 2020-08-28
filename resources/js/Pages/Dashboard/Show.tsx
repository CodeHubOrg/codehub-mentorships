import React, { useState } from "react";
import ProfileMenteeSection from "@/Organisms/ProfileMenteeSection";
import ProfileMentorSection from "@/Organisms/ProfileMentorSection";
import { AppLayout } from "@/Layouts/AppLayout";
import { SuccessBanner } from "@/Molecules/Banners/SuccessBanner";
import { User } from "@/Interfaces/User";
import { MentorProfile } from "@/Interfaces/MentorProfile";
import { MenteeProfile } from "@/Interfaces/MenteeProfile";
import { MenteeCta } from "@/Organisms/MenteeCta";
import { MentorCta } from "@/Organisms/MentorCta";

interface IProps {
    heading?: string;
    justVerified?: boolean;
    user: User;
    mentorProfile?: MentorProfile;
    menteeProfile?: MenteeProfile;
}

const Show = ({ user, mentorProfile, menteeProfile, justVerified }: IProps) => {
    // const { name, email, slackHandle } = user;
    const [verificationBannerVisible, setVerificationBannerVisible] = useState(
        justVerified,
    );

    return (
        <AppLayout>
            {verificationBannerVisible && (
                <SuccessBanner onDismiss={setVerificationBannerVisible}>
                    <p>Thank you, your email has been verified.</p>
                </SuccessBanner>
            )}

            <h1 className="text-3xl font-semibold leading-tight text-gray-900 mb-8">
                Hello {user.firstName}! Welcome to CodeHub Mentorships
            </h1>

            <div className="flex flex-col">
                {/*<div className="mx-auto rounded-md p-6 bg-gray shadow border w-full mb-12 flex flex-col bg-gray-100">*/}
                {/*    <div className=" flex w-full md:w-1/3 justify-center mx-auto mb-6 text-sm text-gray-900">*/}
                {/*        <p className="flex w-1/2 justify-start">Name: </p>*/}
                {/*        <p className="flex w-1/2 justify-start">{name}</p>*/}
                {/*    </div>*/}
                {/*    <div className="flex w-full md:w-1/3 justify-center test-center w-1/2 mx-auto mb-6 text-sm text-gray-900">*/}
                {/*        <p className="flex w-1/2 justify-start">Email:</p>*/}
                {/*        <p className="flex w-1/2 justify-start">{email}</p>*/}
                {/*    </div>*/}
                {/*    <div className="flex w-full md:w-1/3 justify-center mx-auto mb-2 text-sm text-gray-900">*/}
                {/*        <p className="flex w-1/2 justify-start">*/}
                {/*            Slack Handle:*/}
                {/*        </p>*/}
                {/*        <p className="flex w-1/2 justify-start">*/}
                {/*            {slackHandle}*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-12 lg:mb-24">
                    <div className="w-full bg-white p-6 rounded shadow">
                        {menteeProfile ? (
                            <ProfileMenteeSection
                                heading="Mentee profile"
                                menteeProfile={menteeProfile}
                            />
                        ) : (
                            <MenteeCta />
                        )}
                    </div>
                    <div className="w-full bg-white p-6 rounded shadow">
                        {mentorProfile ? (
                            <ProfileMentorSection
                                heading="Mentor profile"
                                mentorProfile={mentorProfile}
                            />
                        ) : (
                            <MentorCta />
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Show;
