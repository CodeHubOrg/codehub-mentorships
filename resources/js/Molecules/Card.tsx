import React from "react";

interface IProps {
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

const Card: React.FC<IProps> = ({ header, footer, children }) => {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            {header && (
                <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
                    {header}
                </div>
            )}
            <div className="px-4 py-5 sm:p-6">{children}</div>
            {footer && (
                <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default Card;
