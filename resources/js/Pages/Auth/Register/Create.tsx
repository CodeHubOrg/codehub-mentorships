import React from "react";
import Form, { IErrors } from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";
import { AppLayout } from "@/Layouts/AppLayout";
import AuthLayout from "@/Layouts/AuthLayout";

type RegisterFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    slackHandle: string;
    password_confirmation: string;
};

const validate = (values: RegisterFormValues) => {
    let errors: IErrors<RegisterFormValues> = {};

    if (!values.firstName || values.firstName.trim().length === 0) {
        errors.firstName = "Please enter your first name";
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
        <div>
            <AppLayout admin="false">
                <AuthLayout
                    heading="Register"
                    message="Please register to create a profile"
                >
                    <Form<RegisterFormValues>
                        action="/register"
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            slackHandle: "",
                            password: "",
                            password_confirmation: "",
                        }}
                        validate={validate}
                        button="Register"
                        render={(
                            values,
                            handleChange,
                            errors,
                            errorsFromBackend,
                        ) => (
                            <React.Fragment>
                                <FormTextInput
                                    type="text"
                                    name="firstName"
                                    label="First Name"
                                    value={values.firstName}
                                    helpText=""
                                    onChange={handleChange}
                                />

                                <div className="block text-sm font-medium text-red-500 pb-5">
                                    {errors.firstName ||
                                        errorsFromBackend.firstName}
                                </div>
                                <FormTextInput
                                    type="text"
                                    name="lastName"
                                    label="Last Name"
                                    value={values.lastName}
                                    helpText=""
                                    onChange={handleChange}
                                />
                                <div className="block text-sm font-medium text-red-500 pb-5">
                                    {errors.lastName ||
                                        errorsFromBackend.lastName}
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
                                    name="slackHandle"
                                    label="Slack handle"
                                    value={values.slackHandle}
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
                                    {errors.password ||
                                        errorsFromBackend.password}
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
                                    {errors.password_confirmation ||
                                        errorsFromBackend.password_confirmation}
                                </div>
                            </React.Fragment>
                        )}
                    />
                    <div className="font-medium text-indigo-600 pt-5 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        <a href="/login">Login</a>
                    </div>
                </AuthLayout>
            </AppLayout>
        </div>
    );
};

export default Create;
