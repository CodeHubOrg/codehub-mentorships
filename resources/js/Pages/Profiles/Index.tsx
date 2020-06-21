import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import FormLayout from "@/Atoms/FormLayout";

interface Props {
    heading?: string;
}

const Index = ({ heading }: Props) => {
    return (
        <div>
            <FormLayout heading={heading} message="You are logged in.">
                <>
                    <p>
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
                    <p>&nbsp;</p>
                </>
            </FormLayout>
        </div>
    );
};

export default Index;
