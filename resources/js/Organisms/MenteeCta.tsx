import React from "react";
import { InertiaLink } from '@inertiajs/inertia-react';

export const MenteeCta: React.FC = () => {
    return (
        <div className="flex flex-col items-center sm:flex-row lg:flex-col">
            <img
                className="max-w-xs sm:mr-8 sm:w-1/2 lg:max-w-xs lg:mr-0 lg:mb-6"
                src="/img/mentee.svg"
                alt="Mentee cartoon illustration"
            />
            <div className="flex flex-col justify-center">
                <h3 className="text-center py-6 sm:pt-0 sm:text-left lg:pt-6 lg:text-center">
                    Are you interested in becoming a mentee
                    and learn new skills? If so, please
                    complete your mentee profile.
                </h3>
                <InertiaLink
                    href="/profiles/mentee/new"
                    className="inline-flex self-center items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 sm:self-start lg:self-center"
                >
                    Apply to become a mentee
                </InertiaLink>
            </div>
        </div>
    );
};
