import React from "react";
import Form from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";
import FormChoiceField from "@/Molecules/FormChoiceField";
import { Textarea } from "@/Atoms/Textarea";

const MenteeForm: React.FC = () => {
    return (
        <Form
            action=""
            initialValues={{
                fullname: "",
                email: "",
                currentstatus: "",
                previousexp: "",
                interest: "",
                specinterest: "",
                mentortype: "",
                timeframe: "",
                suitabletime: "",
                extrainfo: "",
            }}
            button="Submit"
            render={(values, handleChange, errors) => (
                <React.Fragment>
                    <FormTextInput
                        type="text"
                        name="fullname"
                        label="Full name"
                        value={values["fullname"]}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5">
                        {errors["fullname"]}
                    </div>
                    <FormTextInput
                        type="email"
                        name="email"
                        label="Email address"
                        value={values["email"]}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5">
                        {errors["email"]}
                    </div>
                    <FormTextInput
                        type="text"
                        name="currentstatus"
                        label="What is your current situation?"
                        value={values["currentstatus"]}
                        helpText="e.g. student, switching from another career, software dev who wants to learn web dev, etc."
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <Textarea
                        name="previousexp"
                        label="How much experience have you got and with which technologies?"
                        value={values["previousexp"]}
                        helpText=""
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <Textarea
                        name="interest"
                        label="What technologies are you interested in?"
                        value={values["interest"]}
                        helpText=""
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <Textarea
                        name="specinterest"
                        label="Is there something specific you want to learn and want mentoring in?"
                        value={values["specinterest"]}
                        helpText="(e.g. programming language, framework, project, etc.)"
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <FormChoiceField
                        type="radio"
                        label="Are you after some more general mentoring?"
                        selected={values["mentortype"]}
                        choices={[
                            {
                                label: "Yes",
                                helptext: "Yes",
                                value: "yes",
                            },
                            {
                                label: "No",
                                helptext: "No",
                                value: "no",
                            },
                        ]}
                        helpText="e.g. starting out in the industry and not sure what best to learn"
                        onChange={handleChange}
                        name="mentortype"
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <FormTextInput
                        type="text"
                        name="timeframe"
                        label="Roughly how much time are you planning to dedicate each week?"
                        value={values["timeframe"]}
                        helpText=""
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <FormTextInput
                        type="text"
                        name="suitabletime"
                        label="Which timing is suitable for you?"
                        value={values["suitabletime"]}
                        helpText=""
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <Textarea
                        name="extrainfo"
                        label="Anything else?"
                        value={values["extrainfo"]}
                        helpText=""
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                </React.Fragment>
            )}
        />
    );
};

export default MenteeForm;
