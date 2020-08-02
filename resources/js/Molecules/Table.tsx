import React from "react";
import Tablerow  from "@/Molecules/Tablerow";

type Members = {
    first_name: string;
    last_name?: string;
    email: string;
    slack_handle?: string;
    mentoring_experience?: string;
    interests?: string;
    skillset?: string;
    suitable_time?: string;
    extra_info?: string;
    count?:number;
    current_status?: string;
    previous_experience?: string;
    specific_interests?: string;
    mentoring_type?: string;
    timeframe?: string;
};

interface IProps {
    members: Members[];
    handleSelect: (member:Members) => void;
    type:string;
};

const Table = ({ members, handleSelect, type }: IProps) => {
    
    return (
        <table className="min-w-full">
            <thead>
                <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Slack handle
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Name 
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Email Id 
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                       
                    </th> 
                </tr>
            </thead>
            <tbody>
                {members.map((member,i) => {return  <Tablerow member = {member} handleSelect = {handleSelect} type = {type} key = {i}/> }
           
                )}
            </tbody>
        </table>
        
    );
}

export default Table;