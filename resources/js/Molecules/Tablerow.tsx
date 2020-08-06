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
        slack_handle,
        first_name,
        last_name,
        email,
        mentoring_experience,
        current_status,
        interests,
        specific_interests,
        timeframe,
        skillset,
        suitable_time,
        previous_experience,
        mentoring_type,
        extra_info,
    } = member;
    return (
        <>
            <tr key={slack_handle}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                            <input
                                type="radio"
                                name={type}
                                onChange={selectMember}
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {slack_handle}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{`${first_name} ${last_name}`}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{email}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
                        {mentoring_experience && (
                            <p className="px-5 py-1 text-sm">
                                <b>Mentored previously:</b>{" "}
                                {mentoring_experience}
                            </p>
                        )}
                        {current_status && (
                            <p className="px-5 py-1 text-sm">
                                <b>Current status:</b> {current_status}
                            </p>
                        )}
                        {interests && (
                            <p className="px-5 py-1 text-sm">
                                <b>Interests:</b>{" "}
                                {interests || specific_interests}
                            </p>
                        )}
                        {skillset && (
                            <p className="px-5 py-1 text-sm">
                                <b>Skills:</b> {skillset}
                            </p>
                        )}
                        {suitable_time && (
                            <p className="px-5 py-2 text-sm border-b border-gray-200">
                                <b>Suitable time:</b>{" "}
                                {suitable_time || timeframe}
                            </p>
                        )}
                        {previous_experience && (
                            <p className="px-5 py-2 text-sm border-b border-gray-200">
                                <b>Previous experience:</b>{" "}
                                {previous_experience}
                            </p>
                        )}
                        {mentoring_type && (
                            <p className="px-5 py-2 text-sm border-b border-gray-200">
                                <b>Are you after general mentoring?:</b>{" "}
                                {mentoring_type}
                            </p>
                        )}
                        {extra_info && (
                            <p className="px-5 py-2 text-sm border-b border-gray-200">
                                <b>Extra info:</b> {extra_info}
                            </p>
                        )}
                    </td>
                </tr>
            )}
        </>
    );
};

export default Tablerow;
