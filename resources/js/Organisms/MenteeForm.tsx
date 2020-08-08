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
                <React.Fragment>
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
                    <Textarea
                        name="interests"
                        label="What technologies are you interested in?"
                        value={values.interests}
                        helpText=""
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <Textarea
                        name="specificInterests"
                        label="Is there something specific you want to learn and want mentoring in?"
                        value={values.specificInterests}
                        helpText="(e.g. programming language, framework, project, etc.)"
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
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
                    <FormTextInput
                        type="text"
                        name="timeframe"
                        label="Roughly how much time are you planning to dedicate each week?"
                        value={values.timeframe}
                        helpText=""
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <FormTextInput
                        type="text"
                        name="suitableTime"
                        label="Which timing is suitable for you?"
                        value={values.suitableTime}
                        helpText=""
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <Textarea
                        name="extraInfo"
                        label="Anything else?"
                        value={values.extraInfo}
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
