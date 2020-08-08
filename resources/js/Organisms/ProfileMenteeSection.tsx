import React from "react";
import Card from "@/Molecules/Card";

interface IProps {
    heading: string;
    menteeProfile?: {
        id: number;
        currentStatus: string;
        previousExperience: string;
        interests: string;
        specificInterests: string;
        mentoringType?: string;
        timeframe?: string;
        suitableTime?: string;
        extraInfo?: string;
        status?: number;
    };
}

const ProfileMenteeSection: React.FC<IProps> = ({ heading, menteeProfile }) => {
    const {
        currentStatus,
        previousExperience,
        interests,
        specificInterests,
        mentoringType,
        timeframe,
        suitableTime,
        extraInfo,
        status,
    } = menteeProfile;

    return (
        <Card header={heading}>
            <p>
                <span className="mb-6 text-3x text-gray-800 font-semibold">
                    Current status:
                </span>{" "}
                {currentStatus}
            </p>
            <p>
                <span className="mb-6 text-3x text-gray-800 font-semibold">
                    Previous experience:
                </span>{" "}
                {previousExperience}
            </p>
            {interests && (
                <p>
                    <span className="mb-6 text-3x text-gray-800 font-semibold">
                        Interests:
                    </span>{" "}
                    {interests}
                </p>
            )}
            {specificInterests && (
                <p>
                    <span className="mb-6 text-3x text-gray-800 font-semibold">
                        Specific interests:
                    </span>{" "}
                    {specificInterests}
                </p>
            )}
            {mentoringType && (
                <p>
                    <span className="mb-6 text-3x text-gray-800 font-semibold">
                        After some more general mentoring:
                    </span>{" "}
                    {mentoringType}
                </p>
            )}
            {timeframe && (
                <p>
                    <span className="mb-6 text-3x text-gray-800 font-semibold">
                        Time frame:
                    </span>{" "}
                    {timeframe}
                </p>
            )}
            {suitableTime && (
                <p>
                    <span className="mb-6 text-3x text-gray-800 font-semibold">
                        Suitable time:
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
            {/* TODO: Add button "Edit mentee profile" */}
            <p>&nbsp;</p>
        </Card>
    );
};

export default ProfileMenteeSection;
