import React, { useState } from "react";
import FormTextInput from "@/Molecules/FormTextInput";
import AuthLayout from "@/Layouts/AuthLayout";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { useHasErrors } from "@/Hooks/useHasErrors";

const Create: React.FC = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        slackHandle: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = e => {
        const key = e.target.id;
        const value = e.target.value;
        setValues(values => ({
            ...values,
            [key]: value,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        Inertia.post("/register", values, {
            preserveScroll: true,
            preserveState: useHasErrors,
        });
    };

    const { errors } = usePage();

    return (
        <AuthLayout title="Create an account">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <FormTextInput
                            type="text"
                            name="firstName"
                            label="First Name"
                            value={values.firstName}
                            helpText=""
                            onChange={handleChange}
                        />
                        <span className="text-sm text-red-600">
                            {errors.firstName}
                        </span>
                    </div>

                    <div className="mb-6">
                        <FormTextInput
                            type="text"
                            name="lastName"
                            label="Last Name"
                            value={values.lastName}
                            helpText=""
                            onChange={handleChange}
                        />
                        <span className="text-sm text-red-600">
                            {errors.lastName}
                        </span>
                    </div>

                    <div className="mb-6">
                        <FormTextInput
                            type="email"
                            name="email"
                            label="Email address"
                            value={values.email}
                            helpText=""
                            onChange={handleChange}
                        />
                        <span className="text-sm text-red-600">
                            {errors.email}
                        </span>
                    </div>

                    <div className="mb-6">
                        <FormTextInput
                            type="text"
                            name="slackHandle"
                            label="Slack handle"
                            value={values.slackHandle}
                            helpText=""
                            onChange={handleChange}
                        />
                        <span className="text-sm text-red-600">
                            {errors.slackHandle}
                        </span>
                    </div>

                    <div className="mb-6">
                        <FormTextInput
                            type="password"
                            name="password"
                            label="Password"
                            value={values.password}
                            helpText=""
                            onChange={handleChange}
                        />
                        <span className="text-sm text-red-600">
                            {errors.password}
                        </span>
                    </div>

                    <div className="mb-6">
                        <FormTextInput
                            type="password"
                            name="password_confirmation"
                            label="Confirm password"
                            value={values.password_confirmation}
                            helpText=""
                            onChange={handleChange}
                        />
                        <span className="text-sm text-red-600">
                            {errors.password_confirmation}
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="flex py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                        Create account
                    </button>
                </form>
            </div>

            <p className="flex flex-col items-center mt-4 text-sm leading-5 text-gray-600 max-w sm:flex-row">
                <a
                    href="/"
                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                    Back to homepage
                </a>
                <InertiaLink
                    href="/login"
                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 sm:ml-auto"
                >
                    Log in
                </InertiaLink>
            </p>
        </AuthLayout>
    );
};

export default Create;
