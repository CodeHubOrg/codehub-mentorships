import React, { useState } from "react";
import { Member } from "@/Models/Member";

interface Props {
    member: Member;
    handleSelect: (member: Member) => void;
    type: string;
}

const Tablerow = ({ member, handleSelect, type }: Props) => {
    const [fullProfileVisible, setFullProfileVisible] = useState(false);

    const selectMember = () => {
        handleSelect(member);
    };

    const {
        slackHandle,
        name,
        email,
        mentoringExperience,
        currentStatus,
        interests,
        specificInterests,
        timeframe,
        skillset,
        suitableTime,
        previousExperience,
        mentoringType,
        extraInfo,
    } = member;
    return (
        <>
            <tr key={slackHandle}>
                <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        <input
                            type="radio"
                            name={type}
                            onChange={selectMember}
                        />
                    </p>
                </td>
                <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {slackHandle}
                    </p>
                </td>
                <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{name}</p>
                </td>
                <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{email}</p>
                </td>
                <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        <button
                            onClick={() =>
                                setFullProfileVisible(!fullProfileVisible)
                            }
                        >
                            {fullProfileVisible ? "-" : "+"}
                        </button>
                    </p>
                </td>
            </tr>
            {fullProfileVisible && (
                <tr>
                    <td colSpan={4}>
                        {mentoringExperience && (
                            <p className="px-5 py-1 text-sm">
                                <b>Mentored previously:</b>{" "}
                                {mentoringExperience}
                            </p>
                        )}
                        {currentStatus && (
                            <p className="px-5 py-1 text-sm">
                                <b>Current status:</b> {currentStatus}
                            </p>
                        )}
                        {interests && (
                            <p className="px-5 py-1 text-sm">
                                <b>Interests:</b>{" "}
                                {interests || specificInterests}
                            </p>
                        )}
                        {skillset && (
                            <p className="px-5 py-1 text-sm">
                                <b>Skills:</b> {skillset}
                            </p>
                        )}
                        {suitableTime && (
                            <p className="px-5 py-2 text-sm border-b border-gray-200">
                                <b>Suitable time:</b>{" "}
                                {suitableTime || timeframe}
                            </p>
                        )}
                        {previousExperience && (
                            <p className="px-5 py-2 text-sm border-b border-gray-200">
                                <b>Previous experience:</b> {previousExperience}
                            </p>
                        )}
                        {mentoringType && (
                            <p className="px-5 py-2 text-sm border-b border-gray-200">
                                <b>Are you after general mentoring?:</b>{" "}
                                {mentoringType}
                            </p>
                        )}
                        {extraInfo && (
                            <p className="px-5 py-2 text-sm border-b border-gray-200">
                                <b>Extra info:</b> {extraInfo}
                            </p>
                        )}
                    </td>
                </tr>
            )}
        </>
    );
};

export default Tablerow;
