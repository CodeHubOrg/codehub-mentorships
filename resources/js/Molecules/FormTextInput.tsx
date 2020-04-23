import React from "react";

interface IProps {
	name: string;
	label?: string;
	value?: string;
	helpText?: string;
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const FormTextInput: React.FC<IProps> = ({
	name,
	label,
	value,
	onChange,
	helpText
}) => {
	return (
		<div>
			{label && (
				<label
					htmlFor={name}
					className="block text-sm font-medium text-gray-700"
				>
					{label}
				</label>
			)}
			<input
				id={name}
				name={name}
				type="text"
				value={value}
				className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
				onChange={onChange}
				placeholder={helpText}
			/>
			{/*{helpText && <div>{helpText}</div>}*/}
		</div>
	);
};

export default FormTextInput;
