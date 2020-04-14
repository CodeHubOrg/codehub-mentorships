import * as React from "react";


interface iFieldProps {
    placeholder?: string;
}

export const Textarea: React.FC<iFieldProps> = ({
    placeholder
}) => {
    return (
        <div>
            <h1>Text Area</h1>
             <textarea
             placeholder={placeholder}
             onChange={
                 (e: React.FormEvent<HTMLTextAreaElement>) =>
                     console.log(e)
             }
             onBlur={
                 (e: React.FormEvent<HTMLTextAreaElement>) =>
                     console.log(e)
             }
             className="form-control"
             />
        </div>
    );
};

