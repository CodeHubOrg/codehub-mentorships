import * as React from "react";

interface iFieldProps {
    name: string;
    label?: string;
    value?: string;
    helpText?: string;
    onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<iFieldProps> = ({
    name,
    label,
    value,
    onChange,
    helpText,
}) => {
    return (
        <div>
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700 mb-2"
            >
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                value={value}
                className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                onChange={onChange}
                placeholder={helpText}
            />
        </div>
    );
};
