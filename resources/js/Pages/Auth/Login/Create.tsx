import React from "react";
import Form, { IErrors } from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";
import AuthLayout from "@/Layouts/AuthLayout";
import { InertiaLink } from '@inertiajs/inertia-react';

type LoginFormValues = {
    email: string;
    password: string;
};

const validate = (values: LoginFormValues) => {
    let errors: IErrors<LoginFormValues> = {};

    let validEmail = /^.+@.+\..+$/;
    if (!validEmail.test(values.email)) {
        errors.email = "Please enter valid email address";
    }

    if (!values.password || values.password.trim().length === 0) {
        errors.password = "Please enter a password.";
    }
    return errors;
};

const Create: React.FC = () => {
    return (
        <AuthLayout title="Sign in to your account">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <Form<LoginFormValues>
                    action="/login"
                    initialValues={{ email: "", password: "" }}
                    validate={validate}
                    button="Login"
                    render={(
                        values,
                        handleChange,
                        errors,
                        errorsFromBackend,
                    ) => (
                        <React.Fragment>
                            <FormTextInput
                                type="email"
                                name="email"
                                label="Email address"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <div className="block text-sm font-medium text-red-500 pb-5">
                                {errors.email || errorsFromBackend.email}
                            </div>
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
                            <div className="mt-6 flex items-center justify-between">
                                {/*<div className="flex items-center">
                                <FormChoiceField
                                    type="checkbox"
                                    label=""
                                    selected={values.rememberme}
                                    choices={[
                                        {
                                            label: "Remember me",
                                            helptext: "",
                                            value: "yes",
                                        },
                                    ]}
                                    onChange={handleChange}
                                    name="rememberme"
                                />
                                </div>*/}
                                <div className="text-sm leading-5">
                                    <a
                                        href="#"
                                        className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div className="block text-sm font-medium text-red-500 pb-5" />
                        </React.Fragment>
                    )}
                />

            </div>

            <p className="mt-4 text-sm leading-5 text-gray-600 max-w">
                <InertiaLink href="/"
                   className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Back to homepage
                </InertiaLink>
            </p>
        </AuthLayout>
    );
};

export default Create;
