import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import FormLayout from "@/Atoms/FormLayout";

interface Props {
    heading?: string;
}

const linkStyles = {
    textDecoration: "underline",
    color: "#22c",
    paddingLeft: "5px",
    paddingRight: "5px",
};

const Home = ({ heading }: Props) => {
    return (
        <div>
            <FormLayout heading={heading} message="You are logged in.">
                <>
                    <p>
                        If you would like to find a mentor, please fill out the
                        <InertiaLink href="/mentee">
                            <span style={linkStyles}>Mentee form</span>
                        </InertiaLink>
                        .
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        If you would like to sign up as a mentor, please fill
                        out the
                        <InertiaLink href="/mentor">
                            <span style={linkStyles}>Mentor form</span>
                        </InertiaLink>
                        .
                    </p>
                    <p>&nbsp;</p>
                    <InertiaLink href="/logout" method="post">
                        <span style={linkStyles}>Log out</span>
                    </InertiaLink>
                    <p>&nbsp;</p>
                </>
            </FormLayout>
        </div>
    );
};

export default Home;
