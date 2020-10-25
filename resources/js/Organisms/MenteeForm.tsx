import React from "react";
import Form, { IErrors } from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";
import FormChoiceField from "@/Molecules/FormChoiceField";
import { Textarea } from "@/Atoms/Textarea";

type MenteeFormValues = {
    currentStatus: string;
    previousExperience: string;
    interests: string;
    specificInterests: string;
    mentoringType: string;
    timeframe: string;
    suitableTime: string;
    extraInfo: string;
};

const validate = (values: MenteeFormValues) => {
    let errors: IErrors<MenteeFormValues> = {};
    if (!values.currentStatus || values.currentStatus.trim().length === 0) {
        errors.currentStatus =
            "Please give some information about your current situation.";
    }

    return errors;
};

const MenteeForm: React.FC = () => {
    return (
        <Form<MenteeFormValues>
            action="/profiles/mentee/new"
            initialValues={{
                currentStatus: "",
                previousExperience: "",
                interests: "",
                specificInterests: "",
                mentoringType: "",
                timeframe: "",
                suitableTime: "",
                extraInfo: "",
            }}
            validate={validate}
            button="Submit"
            render={(values, handleChange, errors, errorsFromBackend) => (
                <div>
                    <div>
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Your background
                            </h3>
                            <p className="mt-1 text-sm leading-5 text-gray-500">
                                Tell us a bit about your current situation and
                                past experience
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="col-span-6">
                                <FormTextInput
                                    type="text"
                                    name="currentStatus"
                                    label="What is your current situation?"
                                    value={values.currentStatus}
                                    helpText="e.g. student, switching from another career, software dev who wants to learn web dev, etc."
                                    onChange={handleChange}
                                />
                                {(errors.currentStatus ||
                                    errorsFromBackend.currentStatus) && (
                                    <div className="block text-sm font-medium text-red-500 pb-5">
                                        {errors.currentStatus ||
                                            errorsFromBackend.currentStatus}
                                    </div>
                                )}
                            </div>
                            <div className="col-span-6">
                                <Textarea
                                    name="previousExperience"
                                    label="How much experience have you got and with which technologies?"
                                    value={values.previousExperience}
                                    helpText=""
                                    onChange={handleChange}
                                />
                                {errorsFromBackend.previousExperience && (
                                    <div className="block text-sm font-medium text-red-500 pb-5">
                                        {errorsFromBackend.previousExperience}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-200 pt-8">
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Your interests
                            </h3>
                            <p className="mt-1 text-sm leading-5 text-gray-500">
                                What do you want to learn more about
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="col-span-6">
                                <Textarea
                                    name="interests"
                                    label="What technologies are you interested in?"
                                    value={values.interests}
                                    helpText=""
                                    onChange={handleChange}
                                />
                                <div className="block text-sm font-medium text-red-500 pb-5" />
                            </div>
                            <div className="col-span-6">
                                <Textarea
                                    name="specificInterests"
                                    label="Is there something specific you want to learn and want mentoring in?"
                                    value={values.specificInterests}
                                    helpText="(e.g. programming language, framework, project, etc.)"
                                    onChange={handleChange}
                                />
                                <div className="block text-sm font-medium text-red-500 pb-5" />
                            </div>
                            <div className="col-span-6">
                                <FormChoiceField
                                    type="radio"
                                    label="Are you after some more general mentoring?"
                                    selected={values.mentoringType}
                                    choices={[
                                        {
                                            label: "Yes",
                                            helptext: "Yes",
                                            value: "Yes",
                                        },
                                        {
                                            label: "No",
                                            helptext: "No",
                                            value: "No",
                                        },
                                    ]}
                                    helpText="e.g. starting out in the industry and not sure what best to learn"
                                    onChange={handleChange}
                                    name="mentoringType"
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
                                    name="timeframe"
                                    label="Roughly how much time are you planning to dedicate each week?"
                                    value={values.timeframe}
                                    helpText=""
                                    onChange={handleChange}
                                />
                                <div className="block text-sm font-medium text-red-500 pb-5" />
                            </div>
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
                                Tell us about anything else that you feel is
                                important to getting the most out of your
                                mentorship
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

export default MenteeForm;
