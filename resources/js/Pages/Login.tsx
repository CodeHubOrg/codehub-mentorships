import React from "react";
import AuthLayout from "@/Atoms/AuthLayout";

const LoginForm: React.FC = () => {
	return (
		<AuthLayout heading="Login" message="Log into your account">
			<p>Form to go here with fields:</p>

			<div>
				E-Mail Address
				<br />
				Password
				<br />
				Remember Me (checkbox)
				<p>&nbsp;</p>
				Forgot your password?
				<p>&nbsp;</p>
				<button
					className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
					type="submit"
				>
					Login
				</button>
				<p>&nbsp;</p>
				<a href="/register">Register</a>
			</div>
		</AuthLayout>
	);
};

export default LoginForm;
