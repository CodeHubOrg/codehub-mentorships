import React from "react";
import { AppLayout } from "@/Layouts/AppLayout";

type User = {
    user: {
        name: string;
    };
};

interface IProps {
    heading?: string;
    auth: User;
}

const Show = ({ auth }: IProps) => {
    return (
        <AppLayout heading="Dashboard for verified users">
            <div className="flex flex-col">
                <div className="text-center">
                    <p>
                        You are logged in as {auth.user.name}, and the email for
                        your account has been verified.
                    </p>
                </div>
            </div>
        </AppLayout>
    );
};

export default Show;
