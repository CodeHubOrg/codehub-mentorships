import React from "react";
import { Form } from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";

const SampleForm: React.FC = () => {
	return (
		<Form
			action=""
			render={(values, handleChange) => (
				<React.Fragment>
					<FormTextInput
						name="fullname"
						label="Full name"
						value={values["fullname"]}
						helpText="Please enter your full name"
						onChange={handleChange}
					/>
				</React.Fragment>
			)}
		/>
	);
};

export default SampleForm;
