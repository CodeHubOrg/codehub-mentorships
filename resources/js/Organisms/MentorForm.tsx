import React from "react";
import Form, { IErrors } from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";
import FormChoiceField from "@/Molecules/FormChoiceField";
import { Textarea } from "@/Atoms/Textarea";

type MentorFormValues = {
    // email: string;
    // fullname: string;
    mentorexp: string;
    interests: string;
    skillsets: string;
    suitabletime: string;
    extrainfo: string;
};

const validate = (values: MentorFormValues) => {
    let errors: IErrors<MentorFormValues> = {};

    // if (!values.fullname || values.fullname.trim().length === 0) {
    //     errors.fullname = "Please enter your fullname";
    // }

    // let validEmail = /^.+@.+\..+$/;
    // if (!validEmail.test(values.email)) {
    //     errors.email = "Please enter valid email address";
    // }

    // for testing error coming from the backend, temporarily
    // change values.mentorexp to !values so frontend always passes
    if (!values.mentorexp) {
        errors.mentorexp = "Please select a value.";
    }

    return errors;
};

const MentorForm: React.FC = () => {
    return (
        <Form<MentorFormValues>
            action=""
            initialValues={{
                // fullname: "",
                // email: "",
                mentorexp: "",
                interests: "",
                skillsets: "",
                suitabletime: "",
                extrainfo: "",
            }}
            validate={validate}
            button="Submit"
            render={(values, handleChange, errors, errorsBE) => (
                <React.Fragment>
                    {/*<FormTextInput
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
                    />*/}
                    {(errors.mentorexp || errorsBE.mentorexp) && (
                        <div className="block text-sm font-medium text-red-500 pb-5">
                            {/*console.log("errors from backend", errorsBE)*/}
                            {errors.mentorexp || errorsBE.mentorexp}
                        </div>
                    )}
                    <FormChoiceField
                        type="radio"
                        label="Have you mentored anyone before?"
                        selected={values.mentorexp}
                        choices={[
                            {
                                label: "Yes (with CodeHub)",
                                helptext: "Yes",
                                value: "Yes, with Codehub",
                            },
                            {
                                label: "Yes (Elsewhere)",
                                helptext: "Yes",
                                value: "Yes",
                            },
                            {
                                label: "No",
                                helptext: "No",
                                value: "No",
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
                                value: "Specific Programming Language",
                            },
                            {
                                label: "Specific Framework/Library",
                                helptext: "Specific Framework/Library",
                                value: "Specific Framework/Library",
                            },
                            {
                                label: "Industry/Career Advice",
                                helptext: "Industry/Career Advice",
                                value: "Industry/Career Advice",
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
