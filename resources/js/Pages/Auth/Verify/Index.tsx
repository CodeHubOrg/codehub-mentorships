import React from "react";
import { AppLayout } from "@/Layouts/AppLayout";
import Card from "@/Molecules/Card";
import { Inertia } from "@inertiajs/inertia";

interface IProps {
    heading?: string;
    user: {
        id: number;
    };
}

const handleSubmit = userid => {
    Inertia.post("/email/resend", { userid });
};

const Index: React.FC<IProps> = ({ user }) => {
    return (
        <AppLayout heading="Registration">
            <Card header="Email verification">
                <p>Please check your email for a verification link.</p>
                <p>
                    If you did not receive the email, please click below.
                    <br />
                    {""}
                    <br />
                </p>

                <form onSubmit={() => handleSubmit(user.id)}>
                    <button
                        type="submit"
                        className={
                            "block mx-auto px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                        }
                    >
                        Resend email verification link
                    </button>
                </form>
            </Card>
        </AppLayout>
    );
};

export default Index;
