import React from "react";

interface IProps {
    type: string;
    name: string;
    label?: string;
    value?: string;
    helpText?: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const FormTextInput: React.FC<IProps> = ({
    type,
    name,
    label,
    value,
    onChange,
    helpText,
}) => {
    return (
        <div>
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    {label}
                </label>
            )}
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    onChange={onChange}
                    placeholder={helpText}
                />
            </div>

        </div>
    );
};

export default FormTextInput;
