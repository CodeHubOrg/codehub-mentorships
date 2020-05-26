import React from "react";
import Form, { IErrors } from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";
import AuthLayout from "@/Atoms/AuthLayout";

type RegisterFormValues = {
    email: string;
    password: string;
    confirmpwd: string;
    fullname: string;
};

const validate = (values: RegisterFormValues) => {
    let errors: IErrors<RegisterFormValues> = {};

    if (!values.fullname || values.fullname.trim().length === 0) {
        errors.fullname = "Please enter your fullname";
    }

    let validEmail = /^.+@.+\..+$/;
    if (!validEmail.test(values.email)) {
        errors.email = "Please enter valid email address";
    }

    if (values.password.trim().length < 8) {
        errors.password = "password length should be at least 8 characters.";
    }
    if (values.password !== values.confirmpwd) {
        errors.confirmpwd = "Passwords do not match.";
    }

    return errors;
};

const RegisterForm: React.FC = () => {
    return (
        <AuthLayout
            heading="Register"
            message="Please register to create a profile"
        >
            <Form<RegisterFormValues>
                action=""
                initialValues={{
                    fullname: "",
                    email: "",
                    password: "",
                    confirmpwd: "",
                }}
                validate={validate}
                button="Register"
                render={(values, handleChange, errors) => (
                    <React.Fragment>
                        <FormTextInput
                            type="text"
                            name="fullname"
                            label="Full Name"
                            value={values.fullname}
                            helpText=""
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
                            helpText=""
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
                        <FormTextInput
                            type="password"
                            name="confirmpwd"
                            label="Confirm Password"
                            value={values.confirmpwd}
                            helpText=""
                            onChange={handleChange}
                        />

                        <div className="block text-sm font-medium text-red-500 pb-5">
                            {errors.confirmpwd}
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

export default RegisterForm;
