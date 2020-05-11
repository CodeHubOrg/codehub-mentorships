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
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                className="form-input bg-gray-100 block w-full pl-3 pr-12 sm:text-sm sm:leading-5"
                onChange={onChange}
                placeholder={helpText}
            />
        </div>
    );
};

export default FormTextInput;
