import React from "react";
import SummaryRow from "@/Molecules/SummaryRow";
import { Summary } from "@/Models/Summary";

interface IProps {
    summary: Summary[];
    handleSelect: (summary: Summary) => void;
}

const MentorshipSummaryTable = ({ summary, handleSelect }: IProps) => {
    return (
        <table className="min-w-full">
            <thead>
                <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Mentee Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Mentee Email Id
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Mentor Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Mentor Email Id
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase "></th>
                </tr>
            </thead>
            <tbody>
                {summary.map((summary: Summary, i: number) => {
                    return (
                        <SummaryRow
                            summary={summary}
                            handleSelect={handleSelect}
                            key={i}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};

export default MentorshipSummaryTable;
