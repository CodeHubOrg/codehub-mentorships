import React from "react";
import Form, { IErrors } from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";
import FormChoiceField from "@/Molecules/FormChoiceField";
import { Textarea } from "@/Atoms/Textarea";

type MentorFormValues = {
    mentoringExperience: string;
    interests: string;
    skillset: string;
    suitableTime: string;
    extraInfo: string;
};

const validate = (values: MentorFormValues) => {
    let errors: IErrors<MentorFormValues> = {};
    if (!values.mentoringExperience) {
        errors.mentoringExperience = "Please select a value.";
    }

    return errors;
};

const MentorForm: React.FC = () => {
    return (
        <Form<MentorFormValues>
            action=""
            initialValues={{
                mentoringExperience: "",
                interests: "",
                skillset: "",
                suitableTime: "",
                extraInfo: "",
            }}
            validate={validate}
            button="Submit"
            render={(values, handleChange, errors, errorsFromBackend) => (
                <div>
                    {(errors.mentoringExperience ||
                        errorsFromBackend.mentoringExperience) && (
                        <div className="block text-sm font-medium text-red-500 pb-5">
                            {/*console.log("errors from backend", errorsFromBackend)*/}
                            {errors.mentoringExperience ||
                                errorsFromBackend.mentoringExperience}
                        </div>
                    )}
                    <div>
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Your experience
                            </h3>
                            <p className="mt-1 text-sm leading-5 text-gray-500">
                                Tell us a bit about your background and past mentoring experience
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="col-span-6">
                                <FormChoiceField
                                    type="radio"
                                    label="Have you mentored anyone before?"
                                    selected={values.mentoringExperience}
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
                                    name="mentoringExperience"
                                />
                                <div className="block text-sm font-medium text-red-500 pb-5" />
                            </div>
                            <div className="col-span-6">
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
                            </div>
                            <div className="col-span-6">
                                <Textarea
                                    name="skillset"
                                    label="Please list any languages, frameworks, etc. that you would be happy to cover"
                                    value={values.skillset}
                                    helpText="Please go into as much detail as you'd like"
                                    onChange={handleChange}
                                />
                                <div className="block text-sm font-medium text-red-500 pb-5" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-200 pt-8">
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Your mentorship
                            </h3>
                            <p className="mt-1 text-sm leading-5 text-gray-500">
                                How much time can you spare for your mentorship?
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="col-span-6">
                                <FormTextInput
                                    type="text"
                                    name="suitableTime"
                                    label="Which timing is suitable for you?"
                                    value={values.suitableTime}
                                    helpText=""
                                    onChange={handleChange}
                                />
                                <div className="block text-sm font-medium text-red-500 pb-5" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-200 pt-8">
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Anything else
                            </h3>
                            <p className="mt-1 text-sm leading-5 text-gray-500">
                                Tell us about anything else that you feel is important to getting the most out of your mentorship
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="col-span-6">
                                <Textarea
                                    name="extraInfo"
                                    label="Anything else?"
                                    value={values.extraInfo}
                                    helpText=""
                                    onChange={handleChange}
                                />
                                <div className="block text-sm font-medium text-red-500 pb-5" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        />
    );
};

export default MentorForm;
