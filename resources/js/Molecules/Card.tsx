import React from "react";

interface IProps {
    heading?: String;
    hasPadding?: Boolean;
}

const Card: React.FC<IProps> = ({ heading, hasPadding, children}) => {
    return (
        <section>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div
                    className={
                        hasPadding
                            ? "px-4 py-5 border-b border-gray-200 sm:px-6"
                            : "border-b border-gray-200 sm:px-6"
                    }
                >
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        {heading ?? (
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                {heading}
                            </h3>
                        )}                                           
                    </div>

                    {children}
                </div>
            </div>
        </section>
    );
};

export default Card;
