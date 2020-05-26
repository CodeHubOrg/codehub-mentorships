import React from "react";
import Form, { IErrors } from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";
import FormChoiceField from "@/Molecules/FormChoiceField";
import { Textarea } from "@/Atoms/Textarea";

type MentorFormValues = {
    email: string;
    fullname: string;
    mentorexp: string;
    interests: string;
    skillsets: string;
    suitabletime: string;
    extrainfo: string;
};

const validate = (values: MentorFormValues) => {
    let errors: IErrors<MentorFormValues> = {};

    if (!values.fullname || values.fullname.trim().length === 0) {
        errors.fullname = "Please enter your fullname";
    }

    let validEmail = /^.+@.+\..+$/;
    if (!validEmail.test(values.email)) {
        errors.email = "Please enter valid email address";
    }

    return errors;
};

const MentorForm: React.FC = () => {
    return (
        <Form<MentorFormValues>
            action=""
            initialValues={{
                fullname: "",
                email: "",
                mentorexp: "",
                interests: "",
                skillsets: "",
                suitabletime: "",
                extrainfo: "",
            }}
            validate={validate}
            button="Submit"
            render={(values, handleChange, errors) => (
                <React.Fragment>
                    <FormTextInput
                        type="text"
                        name="fullname"
                        label="Your Name/Slack handle"
                        value={values.fullname}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5">
                        {errors.fullname}
                    </div>
                    <FormTextInput
                        type="email"
                        name="email"
                        label="Email address"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5">
                        {errors.email}
                    </div>
                    <FormChoiceField
                        type="radio"
                        label="Have you mentored anyone before?"
                        selected={values.mentorexp}
                        choices={[
                            {
                                label: "Yes (with CodeHub)",
                                helptext: "Yes",
                                value: "yeswithcodehub",
                            },
                            {
                                label: "Yes (Elsewhere)",
                                helptext: "Yes",
                                value: "yes",
                            },
                            {
                                label: "No",
                                helptext: "No",
                                value: "no",
                            },
                        ]}
                        onChange={handleChange}
                        name="mentorexp"
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <FormChoiceField
                        type="checkbox"
                        label="Which concepts would you be happy to cover?"
                        selected={values.interests}
                        choices={[
                            {
                                label: "Specific Programming Language",
                                helptext: "Specific Programming Language",
                                value: "programinglang",
                            },
                            {
                                label: "Specific Framework/Library",
                                helptext: "Specific Framework/Library",
                                value: "framework",
                            },
                            {
                                label: "Industry/Career Advice",
                                helptext: "Industry/Career Advice",
                                value: "careeradvise",
                            },
                        ]}
                        onChange={handleChange}
                        name="interests"
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <Textarea
                        name="skillsets"
                        label="Please list any languages, frameworks, etc. that you would be happy to cover"
                        value={values.skillsets}
                        helpText="Please go into as much detail as you'd like"
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <FormTextInput
                        type="text"
                        name="suitabletime"
                        label="Which timing is suitable for you?"
                        value={values.suitabletime}
                        helpText=""
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <Textarea
                        name="extrainfo"
                        label="Anything else?"
                        value={values.extrainfo}
                        helpText=""
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                </React.Fragment>
            )}
        />
    );
};

export default MentorForm;
