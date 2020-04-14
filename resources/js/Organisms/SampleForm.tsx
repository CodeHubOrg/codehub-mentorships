import React from "react";
import Form from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";
import FormRedioButton from "@/Molecules/FormRedioButton";

const SampleForm: React.FC = () => {
	return (
		<Form
			action=""
			render={(values,handleChange,selected,radioChange) => (
				<React.Fragment>
					<FormTextInput
						name="fullname"
						label="Full name"
						value={values["fullname"]}
						helpText="Please enter your full name"
						onChange={handleChange}
					/>
					<FormRedioButton
						label="Contact"
						selected={selected}
						choices={[{label:'email',helptext:'Email',value:'email'},{label:'phone',helptext:'Phone',value:'phone'}]}
						helpText="Prefered way to contact"
						onChange={radioChange}
						name="contact"
					/>
				</React.Fragment>
			)}
		/>
	);
};

export default SampleForm;
