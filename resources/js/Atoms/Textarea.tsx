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
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                value={value}
                className="form-input block bg-gray-100 w-full pl-7 pr-12 sm:text-sm sm:leading-5"
                onChange={onChange}
                placeholder={helpText}
            />
        </div>
    );
};
