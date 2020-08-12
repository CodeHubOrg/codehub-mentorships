import React, { useState } from "react";
import { AppLayout } from "@/Layouts/AppLayout";
import Table from "@/Molecules/Table";
import { Member } from "@/Models/Member";
import MentorshipSummaryTable from "@/Molecules/MentorshipSummaryTable";
import { Summary } from "@/Models/Summary";
import { Inertia } from "@inertiajs/inertia";

interface IProps {
    mentors: Member[];
    mentees: Member[];
    summary: Summary[];
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

const Index = ({ mentors, mentees, summary }: IProps) => {
    const [selectedMentee, setSelectedMentee] = useState<Member | null>(null);
    const [selectedMentor, setSelectedMentor] = useState<Member | null>(null);
    const [sortedMentors, setSortedMentors] = useState(mentors);
    const [selectDisplayComp, setSelectDisplayComp] = useState("Paring");

    const selectMentee = (member: Member) => {
        // sorting mentor list to match selected mentee skills
        let menteeSkills = member.interests.split(",");
        let sortedMentors = [...mentors];
            for (let i=0; i < sortedMentors.length; i++) {
                let mentorSkills = sortedMentors[i].skillset.split(",");
                let count=0;
                for (let menteeSkill of menteeSkills) {
                    for (let mentorSkill of mentorSkills) {
                        if ( menteeSkill.toUpperCase().trim() === mentorSkill.toUpperCase().trim() ) {
                            count++;
                        }
                    } 
                }
                if (count > 0) {
                    sortedMentors[i].count=count;
                } else {
                    sortedMentors[i].count=0;
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
        console.log(selectedMentor);
        Inertia.post("/admin/", {
            mentorId: selectedMentor.id,
            menteeId: selectedMentee.id,
        });

        setSortedMentors(mentors);
        setSelectedMentee(null);
        setSelectedMentor(null);
    };

    const handleDisplay = (value: string) => {
        setSelectDisplayComp(value);
    };

    const unpair = (summary: Summary) => {
        console.log(summary);  
    };

    return (
        <div>
            <AppLayout 
                heading="Mentor and Mentee Profiles" 
                admin="true" 
                handleDisplay={handleDisplay}
            >
                {selectDisplayComp==="Paring" && ( <div className="flex justify-between w-full">
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
                            members={ selectedMentee ? sortedMentors : mentors }
                            handleSelect={ selectMentor }
                            type="mentor"
                        />
                    </div>
                </div> )}
                { selectedMentee && selectedMentor && selectDisplayComp!=="Summary" && (
                    <button
                        type="button"
                        className="block mx-auto px-6 py-2 mt-10 border text-sm leading-5 font-medium rounded-md bg-white"
                        onClick={ addPair }
                    >
                        Pair
                    </button>
                )}
                 { selectDisplayComp==="Summary" && ( <div className="flex w-full">
                    <div className="h-screen w-full overflow-y-scroll bg-white shadow mr-4">
                        <h1 className="px-4 py-2 text-center text-lg font-semibold text-gray-600">
                            Mentorship summary
                        </h1>
                        <MentorshipSummaryTable
                            summary={summary}
                            handleSelect={unpair}
                        />
                    </div>
                </div> )}        
            </AppLayout>
        </div>
    );
};

export default Index;
