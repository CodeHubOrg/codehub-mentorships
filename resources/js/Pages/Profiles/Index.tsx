import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import FormLayout from "@/Atoms/FormLayout";



const Index = () => {
    return (
        <div>
            <FormLayout heading="Profile Summary" message="">
                <>
                    <InertiaLink
                            href="/logout"
                            method="post"
                            className="text-blue-500 text-right"
                        >
                            Log out
                        </InertiaLink>
                    <div className="flex flex-col  p-6 mb-12">
                        <div className="mx-auto rounded-md p-6 bg-gray shadow border w-full mb-12 flex flex-col ">
                            <div className=" flex w-1/4 sm:w-1/3 justify-center mx-auto mb-6 text-sm text-gray-900">
                                <p className="flex w-1/2 justify-start">Name: </p>
                                <p className="flex w-1/2 justify-start">Test</p>
                            </div>
                            <div className="flex w-1/4 sm:w-1/3 justify-center test-center w-1/2 mx-auto mb-6 text-sm text-gray-900">
                                <p className="flex w-1/2 justify-start">Email:</p>
                                <p className="flex w-1/2 justify-start">Test@example.com</p>
                            </div>
                            <div className="flex w-1/4 sm:w-1/3 justify-center mx-auto mb-2 text-sm text-gray-900">
                                <p className="flex w-1/2 justify-start">Slack Handle: </p>
                                <p className="flex w-1/2 justify-start">Test</p>
                            </div>
                         </div>
           
                        <div className="flex sm:flex-col lg:flex-row mb-12">
                            <div className="w-1/2 sm:w-full">
                                <div className="rounded-md p-6 bg-gray shadow border-solid border-2 border-gray-600">
                                    <div className="mb-2 flex flex-col">
                                        <h3 className="text-sm text-gray-900 mb-6 py-2 text-center">
                                            Are you interested in becomeing mentee and learning new skill? If so,please complete your mentor profile</h3>
                                            <InertiaLink
                                                href="/profiles/mentee/new"
                                                className="text-blue-500">
                                                    <button type="button" className="block mx-auto px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"> Mentee form</button>
                                            </InertiaLink>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 sm:w-full lg:ml-4 lg:mt-0 sm:ml-0 sm:mt-12">
                                <div className="rounded-md p-6 bg-gray shadow border-solid border-2 border-gray-600">
                                    <div className="mb-2 flex flex-col">
                                        <h3 className="text-sm text-gray-900 mb-6 py-2 text-center"> 
                                        Are you interested in mentoring people and sharing your knowledge? If so,please complete your mentor profile</h3>
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
                </>
            </FormLayout>
        </div>
    );
};        
                   {/* <p>
                        Here you can create a profile with general information
                        about yourself.
                        <InertiaLink
                            href="/profiles/general/new"
                            className="text-blue-500"
                        >
                            <br />
                            Profile Form
                        </InertiaLink>
                        .
                    </p>
                    <p>&nbsp;</p>

                    <p>
                        If you would like to find a mentor, please fill out the
                        <InertiaLink
                            href="/profiles/mentee/new"
                            className="text-blue-500"
                        >
                            <br />
                            Mentee form
                        </InertiaLink>
                        .
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        If you would like to sign up as a mentor, please fill
                        out the
                        <InertiaLink
                            href="/profiles/mentor/new"
                            className="text-blue-500"
                        >
                            <br />
                            Mentor form
                        </InertiaLink>
                        .
                    </p>
                    <p>&nbsp;</p>
                    <InertiaLink
                        href="/logout"
                        method="post"
                        className="text-blue-500"
                    >
                        Log out
                    </InertiaLink>
                   <p>&nbsp;</p>*/}
 
            
export default Index;
