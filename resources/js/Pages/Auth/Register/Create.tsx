import React from "react";
import Form, { IErrors } from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";
import AuthLayout from "@/Atoms/AuthLayout";

type RegisterFormValues = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    slack_handle: string;
    password_confirmation: string;
};

const validate = (values: RegisterFormValues) => {
    let errors: IErrors<RegisterFormValues> = {};

    if (!values.first_name || values.first_name.trim().length === 0) {
        errors.first_name = "Please enter your first name";
    }

    let validEmail = /^.+@.+\..+$/;
    if (!validEmail.test(values.email)) {
        errors.email = "Please enter valid email address";
    }

    if (values.password.trim().length < 8) {
        errors.password = "password length should be at least 8 characters.";
    }
    if (values.password !== values.password_confirmation) {
        errors.password_confirmation = "Passwords do not match.";
    }

    return errors;
};

const Create: React.FC = () => {
    return (
        <AuthLayout
            heading="Register"
            message="Please register to create a profile"
        >
            <Form<RegisterFormValues>
                action="/register"
                initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    slack_handle: "",
                    password: "",
                    password_confirmation: "",
                }}
                validate={validate}
                button="Register"
                render={(values, handleChange, errors, errorsFromBackend) => (
                    <React.Fragment>
                        <FormTextInput
                            type="text"
                            name="first_name"
                            label="First Name"
                            value={values.first_name}
                            helpText=""
                            onChange={handleChange}
                        />
                        
                        <div className="block text-sm font-medium text-red-500 pb-5">
                            {errors.first_name || errorsFromBackend.first_name}
                        </div>
                        <FormTextInput
                            type="text"
                            name="last_name"
                            label="Last Name"
                            value={values.last_name}
                            helpText=""
                            onChange={handleChange}
                        />
                        <div className="block text-sm font-medium text-red-500 pb-5">
                            {errors.last_name || errorsFromBackend.last_name}
                        </div>
                        <FormTextInput
                            type="email"
                            name="email"
                            label="Email address"
                            value={values.email}
                            helpText=""
                            onChange={handleChange}
                        />
                        <div className="block text-sm font-medium text-red-500 pb-5">
                            {errors.email || errorsFromBackend.email}
                        </div>
                        <FormTextInput
                            type="text"
                            name="slack_handle"
                            label="Slack handle"
                            value={values.slack_handle}
                            helpText=""
                            onChange={handleChange}
                        />
                        <div className="block text-sm font-medium text-red-500 pb-5" />
                        <FormTextInput
                            type="password"
                            name="password"
                            label="Password"
                            value={values.password}
                            helpText=""
                            onChange={handleChange}
                        />

                        <div className="block text-sm font-medium text-red-500 pb-5">
                            {errors.password || errorsFromBackend.password}
                        </div>
                        <FormTextInput
                            type="password"
                            name="password_confirmation"
                            label="Confirm Password"
                            value={values.password_confirmation}
                            helpText=""
                            onChange={handleChange}
                        />

                        <div className="block text-sm font-medium text-red-500 pb-5">
                            {errors.password_confirmation || errorsFromBackend.password_confirmation}
                        </div>
                    </React.Fragment>
                )}
            />
            <div className="font-medium text-indigo-600 pt-5 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                <a href="/login">Login</a>
            </div>
        </AuthLayout>
    );
};

export default Create;
