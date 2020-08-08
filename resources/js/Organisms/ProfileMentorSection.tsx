import React from "react";
import Card from "@/Molecules/Card";

interface IProps {
    heading: string;
    mentorProfile?: {
        id: number;
        mentoringExperience: string;
        interests?: string;
        skillset?: string;
        suitableTime?: string;
        extraInfo?: string;
        status?: number;
    };
}

const ProfileMentorSection: React.FC<IProps> = ({ heading, mentorProfile }) => {
    const {
        mentoringExperience,
        interests,
        skillset,
        suitableTime,
        extraInfo,
        status,
    } = mentorProfile;

    return (
        <Card header={heading}>
            <p>
                <span className="mb-6 text-3x text-gray-800 font-semibold">
                    Mentoring experience:
                </span>{" "}
                {mentoringExperience}
            </p>
            {interests && (
                <p>
                    <span className="mb-6 text-3x text-gray-800 font-semibold">
                        Interests:
                    </span>{" "}
                    {interests}
                </p>
            )}
            {skillset && (
                <p>
                    <span className="mb-6 text-3x text-gray-800 font-semibold">
                        Skill set:
                    </span>{" "}
                    {skillset}
                </p>
            )}
            {suitableTime && (
                <p>
                    <span className="mb-6 text-3x text-gray-800 font-semibold">
                        Suitable Time:
                    </span>{" "}
                    {suitableTime}
                </p>
            )}
            {extraInfo && (
                <p>
                    <span className="mb-6 text-3x text-gray-800 font-semibold">
                        Additional info:
                    </span>{" "}
                    {extraInfo}
                </p>
            )}
            {status === 0 && (
                <>
                    <p>&nbsp;</p>
                    <p>
                        <em>Your registration is pending.</em>
                    </p>
                </>
            )}
            <p>&nbsp;</p>
        </Card>
    );
};

export default ProfileMentorSection;
