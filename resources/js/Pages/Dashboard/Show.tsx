import React from "react";
import {InertiaLink} from '@inertiajs/inertia-react';
import FormLayout from "@/Atoms/FormLayout";

interface IProps {
    user:{   
    name: string;
    email: string; 
    handle?:string; 
    }
}

const Show = ({ user }: IProps) => {
    return (
        <FormLayout heading="Profile Summary" message="">
            <InertiaLink
                href="/profiles"
                method="post"
                className="text-gray-900 absolute top-6 right-10"
            >
                Profile
            </InertiaLink>
            <div className="flex flex-col">
                <div className="mx-auto rounded-md p-6 bg-gray shadow border w-full mb-12 flex flex-col bg-gray-100">
                    <div className=" flex w-full md:w-1/3 justify-center mx-auto mb-6 text-sm text-gray-900">
                        <p className="flex w-1/2 justify-start">Name: </p>
                        <p className="flex w-1/2 justify-start">{user.name}</p>
                    </div>
                    <div className="flex w-full md:w-1/3 justify-center test-center w-1/2 mx-auto mb-6 text-sm text-gray-900">
                        <p className="flex w-1/2 justify-start">Email:</p>
                        <p className="flex w-1/2 justify-start">{user.email}</p>
                    </div>
                    <div className="flex w-full md:w-1/3 justify-center mx-auto mb-2 text-sm text-gray-900">
                        <p className="flex w-1/2 justify-start">Slack Handle: </p>
                        <p className="flex w-1/2 justify-start">Test</p>
                    </div>
                </div>
           
                <div className="flex flex-col lg:flex-row mb-12 lg:mb-24">
                    <div className="lg:w-1/2 w-full bg-gray-100">
                        <div className="rounded-md p-6 bg-gray shadow border">
                            <div className="mb-2 flex flex-col">
                                <h3 className="text-sm text-gray-900 mb-6 py-2 text-center">
                                    Are you interested in becomeing mentee and learning new skill? If so,please complete your mentor profile
                                </h3>
                                <InertiaLink href="/profiles/mentee/new" className="text-blue-500">
                                    <button type="button" className="block mx-auto px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"> Mentee form</button>
                                </InertiaLink>        
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full lg:ml-4 lg:mt-0 ml-0 mt-12 bg-gray-100">
                        <div className="rounded-md p-6 bg-gray shadow border">
                            <div className="mb-2 flex flex-col">
                                <h3 className="text-sm text-gray-900 mb-6 py-2 text-center"> 
                                    Are you interested in mentoring people and sharing your knowledge? If so,please complete your mentor profile
                                </h3>
                                <InertiaLink href="/profiles/mentor/new" className="text-blue-500">
                                    <button type="button" className="block mx-auto px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                        Mentor form
                                    </button>
                                </InertiaLink> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FormLayout>
    );
};

export default Show;


{/*<div className="min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-md">
                {user.name}
                {user.name}
                <p className="mb-8">This is the dashboard that an authenticated user will see upon login and successful registration.</p>
                <p className="mb-8">Eventually this will show the user a short summary of their profiles (mentor/mentee) as well as summary details of the mentorships they are involved in.</p>
                <p className="mb-8">For now you can use this link to view the users /profiles page:</p>

                <p><InertiaLink href="/profiles" className="text-blue-500">Profiles</InertiaLink></p>
            </div>
    </div>*/}