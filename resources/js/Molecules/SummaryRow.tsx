import React from "react";
import { Summary } from "@/Models/Summary";

interface Props {
    summary: Summary;
    handleSelect: (summary: Summary) => void;
    key?: number;
}

const SummaryRow = ({ summary, handleSelect }: Props) => {
    const handleClick = () => {
        handleSelect(summary);
    };

    const {
        menteeFirstName,
        menteeLastName,
        menteeEmail,
        mentorFirstName,
        mentorLastName,
        mentorEmail,
    } = summary;
    return (
        <>
            <tr key={menteeEmail}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{`${menteeFirstName} ${menteeLastName}`}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {menteeEmail}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{`${mentorFirstName} ${mentorLastName}`}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {mentorEmail}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        <button
                            onClick={handleClick}
                            className="block mx-auto px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md  bg-gray-300 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-indigo active:bg-gray-700 transition ease-in-out duration-150"
                        >
                            Unpair
                        </button>
                    </p>
                </td>
            </tr>
        </>
    );
};

export default SummaryRow;
