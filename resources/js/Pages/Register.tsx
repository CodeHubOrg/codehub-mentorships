import React from "react";
import AuthLayout from "@/Atoms/AuthLayout";

const RegisterForm: React.FC = () => {
    return (
        <AuthLayout
            heading="Register"
            message="Please register to create a profile"
        >
            <p>Form to go here with fields:</p>

            <div>
				Name
                <br />
				E-Mail Address
                <br />
				Password
                <br />
				Confirm Password
                <p>&nbsp;</p>
                <button
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                    type="submit"
                >
					Register
                </button>
                <p>&nbsp;</p>
                <a href="/login">Login</a>
            </div>
        </AuthLayout>
    );
};

export default RegisterForm;

