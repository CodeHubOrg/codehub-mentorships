import * as React from "react";


interface iFieldProps {
    placeholder?: string;
}

export const Textarea: React.FC<iFieldProps> = ({
    placeholder
}) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                Textarea
            </label>
            <textarea
                placeholder={placeholder}
                onChange={
                    (e: React.FormEvent<HTMLTextAreaElement>) =>
                        console.log(e.currentTarget.value)
                }
                className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
            />
        </div>
    );
};

