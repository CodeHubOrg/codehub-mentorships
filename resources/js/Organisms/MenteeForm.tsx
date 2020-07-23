import React from "react";
import Form, { IErrors } from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";
import FormChoiceField from "@/Molecules/FormChoiceField";
import { Textarea } from "@/Atoms/Textarea";

type MenteeFormValues = {
    current_status: string;
    previous_experience: string;
    interests: string;
    specific_interests: string;
    mentoring_type: string;
    timeframe: string;
    suitable_time: string;
    extra_info: string;
};

const validate = (values: MenteeFormValues) => {
    let errors: IErrors<MenteeFormValues> = {};
    if (!values.current_status || values.current_status.trim().length === 0) {
        errors.current_status =
            "Please give some information about your current situation.";
    }

    return errors;
};

const MenteeForm: React.FC = () => {
    return (
        <Form<MenteeFormValues>
            action="/profiles/mentee/new"
            initialValues={{
                current_status: "",
                previous_experience: "",
                interests: "",
                specific_interests: "",
                mentoring_type: "",
                timeframe: "",
                suitable_time: "",
                extra_info: "",
            }}
            validate={validate}
            button="Submit"
            render={(values, handleChange, errors, errorsFromBackend) => (
                <React.Fragment>
                    <FormTextInput
                        type="text"
                        name="current_status"
                        label="What is your current situation?"
                        value={values.current_status}
                        helpText="e.g. student, switching from another career, software dev who wants to learn web dev, etc."
                        onChange={handleChange}
                    />
                    {(errors.current_status ||
                        errorsFromBackend.current_status) && (
                        <div className="block text-sm font-medium text-red-500 pb-5">
                            {errors.current_status ||
                                errorsFromBackend.current_status}
                        </div>
                    )}
                    <Textarea
                        name="previous_experience"
                        label="How much experience have you got and with which technologies?"
                        value={values.previous_experience}
                        helpText=""
                        onChange={handleChange}
                    />
                    {(errorsFromBackend.previous_experience) && (
                        <div className="block text-sm font-medium text-red-500 pb-5">
                            {errorsFromBackend.previous_experience}
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
                        name="specific_interests"
                        label="Is there something specific you want to learn and want mentoring in?"
                        value={values.specific_interests}
                        helpText="(e.g. programming language, framework, project, etc.)"
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <FormChoiceField
                        type="radio"
                        label="Are you after some more general mentoring?"
                        selected={values.mentoring_type}
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
                        name="mentoring_type"
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
                        name="suitable_time"
                        label="Which timing is suitable for you?"
                        value={values.suitable_time}
                        helpText=""
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <Textarea
                        name="extra_info"
                        label="Anything else?"
                        value={values.extra_info}
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
