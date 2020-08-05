import React from "react";
import Tablerow  from "@/Molecules/Tablerow";
import { Member } from '@/Models/Member';

interface IProps {
    members: Member[];
    handleSelect: (member:Member) => void;
    type: string;
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
                { members.map((member:Member,i:number) => { 
                    return <Tablerow member={member} handleSelect={handleSelect} type={type} key={i} /> 
                }) }
            </tbody>
        </table>
        
    );
}

export default Table;