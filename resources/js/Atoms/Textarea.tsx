import * as React from "react";

type Editor = "textbox";

interface iFieldProps {
    label?: string;
    editor?: Editor;
    value?: any;
}

export const Textarea: React.FC<iFieldProps> = ({
    label
    editor,
    value
}) => {
    return (
        <div>
            {editor!.toLowerCase() === "multilinetextbox" && (
             <textarea
             value={value}
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
            )}
        </div>
    );
};

