import React, { useState } from "react";
import { AppLayout } from "@/Layouts/AppLayout";
import Table from "@/Molecules/Table";
import { Member } from "@/Models/Member";
import { Inertia } from "@inertiajs/inertia";

interface IProps {
    mentors: Member[];
    mentees: Member[];
}

const compareQuantity = (a: Member, b: Member): number => {
    if (a.count < b.count) {
        return 1;
    } else if (a.count > b.count) {
        return -1;
    } else {
        return 0;
    }
};

const Index = ({ mentors, mentees }: IProps) => {
    const [selectedMentee, setSelectedMentee] = useState<Member | null>(null);
    const [selectedMentor, setSelectedMentor] = useState<Member | null>(null);
    const [sortedMentors, setSortedMentors] = useState(mentors);

    const selectMentee = (member: Member) => {
        // sorting mentor list to match selected mentee skills
        let menteeSkills = member.interests.toUpperCase();
        let sortedMentors = [...mentors];

        for (let i = 0; i < sortedMentors.length; i++) {
            let mentorSkills = sortedMentors[i].skillset.split(",");
            let length = mentorSkills.length;
            let count = 0;
            for (let j = 0; j < length; j++) {
                if (menteeSkills.includes(mentorSkills[j].toUpperCase().trim()))
                    count++;
            }
            if (count > 0) {
                sortedMentors[i].count = count;
            } else {
                sortedMentors[i].count = 0;
            }
        }

        sortedMentors = sortedMentors.sort(compareQuantity);
        setSelectedMentee(member);
        setSortedMentors(sortedMentors);
    };

    const selectMentor = (member: Member) => {
        setSelectedMentor(member);
    };

    const addPair = () => {
        Inertia.post("/admin/", {
            mentorId: selectedMentor.id,
            menteeId: selectedMentee.id,
        });

        setSortedMentors(mentors);
        setSelectedMentee(null);
        setSelectedMentor(null);
    };

    return (
        <div>
            <AppLayout heading="Mentor and Mentee Profiles">
                <div className="flex justify-between w-full">
                    <div className="w-1/2 h-screen overflow-y-scroll bg-white shadow mr-4">
                        <h1 className="px-4 py-2 text-center text-lg font-semibold text-gray-600">
                            Mentee List
                        </h1>
                        <Table
                            members={mentees}
                            handleSelect={selectMentee}
                            type="mentee"
                        />
                    </div>
                    <div className="w-1/2 h-screen overflow-y-scroll bg-white shadow ml-2">
                        <h1 className="px-4 py-2 text-center text-lg font-semibold text-gray-600">
                            Mentor List
                        </h1>
                        <Table
                            members={selectedMentee ? sortedMentors : mentors}
                            handleSelect={selectMentor}
                            type="mentor"
                        />
                    </div>
                </div>
                {selectedMentee && selectedMentor && (
                    <button
                        type="button"
                        className="block mx-auto px-8 py-2 m-10 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                        onClick={addPair}
                    >
                        Pair
                    </button>
                )}
            </AppLayout>
        </div>
    );
};

export default Index;
