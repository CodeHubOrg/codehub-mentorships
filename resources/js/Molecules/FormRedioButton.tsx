import React from "react";

interface choice {
    label: string;
    helptext: string;
    value: string;
}
interface IProps {
    label: string;
    selected: string;
    choices: choice[];
    helpText: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    name: string;
}
const FormRedioButton: React.FC<IProps> = ({
    label,
    selected,
    choices,
    helpText,
    onChange,
    name,
}) => {
    return (
        <div>
            <label>{label}:</label>
            <p className="text-sm leading-5 font-medium text-gray-400">
                {helpText}
            </p>
            {choices &&
                choices.map((choice, index) => (
                    <div key={index} className="mt-4 flex items-center">
                        <input
                            type="radio"
                            id={choice.value}
                            name={name}
                            value={choice.value}
                            checked={selected == choice.value}
                            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            onChange={onChange}
                        />
                        <label htmlFor={choice.value} className="ml-3">
                            <span className="block text-sm leading-5 font-medium text-gray-700">
                                {choice.label}
                            </span>
                        </label>
                    </div>
                ))}
        </div>
    );
};

export default FormRedioButton;
