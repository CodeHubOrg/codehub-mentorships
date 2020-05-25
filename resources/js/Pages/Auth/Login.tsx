import React from "react";
import Form, { IErrors } from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";
import AuthLayout from "@/Atoms/AuthLayout";

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

const LoginForm: React.FC = () => {
    return (
        <AuthLayout heading="Login" message="Log into your account">
            <Form<LoginFormValues>
                action="/login"
                initialValues={{ email: "", password: "" }}
                validate={validate}
                button="Login"
                render={(values, handleChange, errors) => (
                    <React.Fragment>
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
                        <FormTextInput
                            type="password"
                            name="password"
                            label="Password"
                            value={values.password}
                            helpText=""
                            onChange={handleChange}
                        />
                        <div className="block text-sm font-medium text-red-500 pb-5">
                            {errors.password}
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
            <div className="font-medium text-indigo-600 pt-5 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                <a href="/register">Register</a>
            </div>
        </AuthLayout>
    );
};

export default LoginForm;
