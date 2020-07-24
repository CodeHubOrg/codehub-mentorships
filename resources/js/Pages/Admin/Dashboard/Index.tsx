import React from "react";
import { AppLayout } from '@/Layouts/AppLayout';
import Card from "@/Molecules/Card";
import Heading from "@/Atoms/Heading";

type Mentor = {
    first_name: string;
    last_name?: string;
    email: string;
    slack_handle?: string;
    mentoring_experience: string;
    interests?: string;
    skillset?: string;
    suitable_time?: string;
    extra_info?: string;
}

type Mentee = {
    first_name: string;
    last_name?: string;
    email: string;
    slack_handle?: string;
    current_status: string;
    previous_experience: string;
    interests: string;
    specific_interests: string;
    mentoring_type?: string;
    timeframe?: string;
    suitable_time?: string;
    extra_info?: string;
}

interface IProps {
    mentors: Mentor[];
    mentees: Mentee[];
}

// not using all the attributes currently
const Index = ({mentors, mentees}: IProps) => {
    return (
        <div>
            <AppLayout
                heading="Mentor and Mentee Profiles"
            >
                <Heading type="h2" content="Mentors" />
                {mentors.map((mentor, i) => 
                    (<div style={{marginBottom: "10px"}} key={i}>
                        <Card  header={`${mentor.first_name} ${mentor.last_name}`}>
                           <p>Mentored previously: {mentor.mentoring_experience}</p>
                           {mentor.interests && (
                           <p>Happy to cover: {mentor.interests}
                          </p>
                            )}
                          {mentor.skillset && (
                           <p>Skills: {mentor.skillset}
                          </p>
                            )}
                          {mentor.extra_info && (
                           <p>Extra info: {mentor.extra_info}
                          </p>
                            )}

                        </Card>
                    </div>)
                    
                )}

                <Heading type="h2" content="Mentees" />
                {mentees.map((mentee, i) => 
                    (<div style={{marginBottom: "10px"}} key={i}>
                        <Card  header={`${mentee.first_name} ${mentee.last_name}`}>
                            <p>Current status: {mentee.current_status}</p>
                          
                          {mentee.interests && (
                           <p>Interests: {mentee.interests}
                          </p>
                            )}
                          {mentee.specific_interests && (
                           <p>Specific thing to be mentored on: {mentee.specific_interests}
                          </p>
                            )}
                          {mentee.timeframe && (
                           <p>Weekly time investment: {mentee.timeframe}
                          </p>
                            )}
                      
                        </Card>
                    </div>)
                )}

            </AppLayout>
        </div>
    );
}

export default Index;
