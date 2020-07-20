import React from "react";
import { NavItem } from '@/Interfaces/NavItem';

interface Props {
    item: NavItem;
}

export const NavItemDesktop: React.FC<Props> = ({item}) => {

    const baseClasses = 'mr-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out';
    const stateClasses = item.active
        ? 'border-indigo-500 text-gray-900 focus:border-indigo-700'
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'

    return (
        <a href={ item.url }
           className={`${baseClasses} ${stateClasses}`}>
            { item.title }
        </a>
    );
};
