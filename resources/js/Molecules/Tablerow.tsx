import React, { useState } from "react";
import { Member } from '@/Interfaces/Member';

interface Props {
    member: Member;
    handleSelect: (member:Member) => void;
    type:string;
};

const Tablerow = ({ member, handleSelect, type }: Props) => {
    const [fullProfileVisible, setFullProfileVisible] = useState(false);

    const selectedMember = () =>  {
        handleSelect(member);
    }
  
    return (
        <>
            <tr key={member.slack_handle}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                            <input type="radio" name={type} onChange={selectedMember}/>
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {member.slack_handle} 
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{`${member.first_name} ${member.last_name}`}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{member.email}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        <button onClick={ () => setFullProfileVisible(!fullProfileVisible) }>
                            { fullProfileVisible ? "-" : "+" } 
                        </button>
                    </p>
                </td>
            </tr>
            {fullProfileVisible && <tr>
                <td colSpan={4}>
                    {member.mentoring_experience && (
                        <p className="px-5 py-1 text-sm"><b>Mentored previously:</b> {member.mentoring_experience}</p>
                    )}
                    {member.current_status && (
                        <p className="px-5 py-1 text-sm"><b>Current status:</b> {member.current_status}</p>
                    )}
                    {member.interests && (
                        <p className="px-5 py-1 text-sm"><b>Interests:</b> {member.interests || member.specific_interests}</p>
                    )}
                    {member.skillset && (
                        <p className="px-5 py-1 text-sm"><b>Skills:</b> {member.skillset}</p>
                    )}
                    {member.suitable_time && (
                        <p className="px-5 py-2 text-sm border-b border-gray-200"><b>Suitable time:</b> {member.suitable_time || member.timeframe}</p>
                    )}
                    {member.previous_experience && (
                        <p className="px-5 py-2 text-sm border-b border-gray-200"><b>Previous experience:</b> {member.previous_experience}</p>
                    )}
                    {member.mentoring_type && (
                        <p className="px-5 py-2 text-sm border-b border-gray-200"><b>Are you after general mentoring?:</b> {member.mentoring_type}</p>
                    )}
                    {member.extra_info && (
                        <p className="px-5 py-2 text-sm border-b border-gray-200"><b>Extra info:</b> {member.extra_info}</p>
                    )}
                </td>     
            </tr>}
        </>
    )
}



export default Tablerow;