import React from "react";
import { AppLayout } from "@/Layouts/AppLayout";
import Card from "@/Molecules/Card";

type User = {
    name: string;
    email: string;
    slackHandle?: string;
};

interface IProps {
    heading?: string;
    pairedMentors: User[];
    pairedMentees: User[];
}

const Show = ({ pairedMentors, pairedMentees }: IProps) => {
    return (
        <AppLayout heading="Paired Mentee and Mentor">
            <div className="flex flex-col md:w-1/2 mx-auto">
                {pairedMentors &&
                    pairedMentors.map((mentor: User, i: number) => {
                        return (
                            <div className="mb-6" key={i}>
                                <Card header="Paired Mentor">
                                    <p className="py-1">
                                        <span className="mb-6 mr-2 text-3x text-gray-800 font-semibold">
                                            Name:
                                        </span>
                                        {`${mentor.name}`}
                                    </p>
                                    <p className="py-1">
                                        <span className="mb-6 mr-2 text-3x text-gray-800 font-semibold">
                                            Email ID:
                                        </span>
                                        {mentor.email}
                                    </p>
                                    <p className="py-1">
                                        <span className="mb-6 mr-2 text-3x text-gray-800 font-semibold">
                                            Slack Handle:
                                        </span>
                                        {mentor.slackHandle}
                                    </p>
                                </Card>
                            </div>
                        );
                    })}

                {pairedMentees &&
                    pairedMentees.map((mentee: User, i: number) => {
                        return (
                            <div className="my-6" key={i}>
                                <Card header="Paired Mentee">
                                    <p className="py-1">
                                        <span className="mb-6 mr-2 text-3x text-gray-800 font-semibold">
                                            Name:
                                        </span>
                                        {mentee.name}
                                    </p>
                                    <p className="py-1">
                                        <span className="mb-6 mr-2 text-3x text-gray-800 font-semibold">
                                            Email ID:
                                        </span>
                                        {mentee.email}
                                    </p>
                                    <p className="py-1">
                                        <span className="mb-6 mr-2 text-3x text-gray-800 font-semibold">
                                            Slack Handle:
                                        </span>
                                        {mentee.slackHandle}
                                    </p>
                                </Card>
                            </div>
                        );
                    })}
            </div>
        </AppLayout>
    );
};

export default Show;
