import React from "react";
import { AppLayout } from "@/Layouts/AppLayout";

interface IProps {
    heading?: string;
    user: {
        first_name: string;
        last_name: string;
        email: string;
        slack_handle?: string;
    };
}

const Show = ({ user }: IProps) => {
    return (
        <AppLayout heading="Email verification successful">
            <div className="flex flex-col">
                <p>
                    Thank you {user.first_name}, your account has been verified.
                </p>
            </div>
        </AppLayout>
    );
};

export default Show;
