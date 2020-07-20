import React from "react";
import Form, { IErrors } from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";

type ProfilePageValues = {
    first_name: string;
    last_name: string;
    email: string;
    subtoteach: string;
    subtolearn: string;
    meetduration: string;
    meetfrequency: string;
};

const validate = (values: ProfilePageValues) => {
    let errors: IErrors<ProfilePageValues> = {};

    if (!values.first_name || values.first_name.trim().length === 0) {
        errors.first_name = "Please enter your first name";
    }

    if (!values.last_name || values.last_name.trim().length === 0) {
        errors.last_name = "Please enter your last name";
    }

    let validEmail = /^.+@.+\..+$/;
    if (!validEmail.test(values.email)) {
        errors.email = "Please enter valid email address";
    }

    return errors;
};

const Profile: React.FC = () => {
    return (
        <Form<ProfilePageValues>
            action="/profile"
            initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                subtoteach: "",
                subtolearn: "",
                meetduration: "",
                meetfrequency: "",
            }}
            validate={validate}
            button="Update"
            render={(values, handleChange, errors) => (
                <React.Fragment>
                    <FormTextInput
                        type="text"
                        name="first_name"
                        label="First name"
                        value={values.first_name}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5">
                        {errors["first_name"]}
                    </div>
                    <FormTextInput
                        type="text"
                        name="last_name"
                        label="Last name"
                        value={values.last_name}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5">
                        {errors["last_name"]}
                    </div>
                    <FormTextInput
                        type="email"
                        name="email"
                        label="Email address"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5">
                        {errors["email"]}
                    </div>
                    <FormTextInput
                        type="text"
                        name="subtoteach"
                        label="Technologies i am interested in mentoring"
                        value={values.subtoteach}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <FormTextInput
                        type="text"
                        name="subtolearn"
                        label="Technologies i am interested to learn"
                        value={values.subtolearn}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <FormTextInput
                        type="text"
                        name="meetfrequency"
                        label="How often i can attend meetup"
                        value={values.meetfrequency}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <FormTextInput
                        type="text"
                        name="meetduration"
                        label="How long i will be with mentoring program"
                        value={values.meetduration}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                </React.Fragment>
            )}
        />
    );
};

export default Profile;
