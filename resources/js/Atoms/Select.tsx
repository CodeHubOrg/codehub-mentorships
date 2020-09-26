import React, { useState } from "react";

type Option = { value: string; text: string };

interface IProps {
    options: Option[];
    value: string;
    handleUpdate: (val: number | string, userId: number) => Promise<void>;
    userId: number;
}

const Select: React.FC<IProps> = ({ options, value, handleUpdate, userId }) => {
    const [selectedValue, setSelectedValue] = useState(value);

    const handleChange = e => {
        const val = e.currentTarget.value;
        setSelectedValue(val);
        handleUpdate(val, userId);
    };

    return (
        <div className="inline-block relative w-64">
            <select
                onChange={handleChange}
                value={selectedValue}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
                {options.map((option, i) => (
                    <option value={option.value} key={i}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
