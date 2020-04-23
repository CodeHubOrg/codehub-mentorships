import React, { useState } from "react";

interface IFormProps {
  /* The http path that the form will be posted to */
  action: string;
  initialValues: IValues;
  formErrors ?:IErrors;
  /* A prop which allows content to be injected */
  render: (
    val: IValues,
    handleChange: (e: React.FormEvent<HTMLInputElement|HTMLTextAreaElement>) => void,
    errors:IErrors
  ) => React.ReactNode;
}

export interface IValues {
  /* Key value pairs for all the field values with key being the field name */
  [key: string]: any;
}

export interface IErrors {
  /* The validation error messages for each field (key is the field name */
  [key: string]: string;
}

export interface IFormState {
  /* The field values */
  values: IValues;

  /* The field validation error messages */
  errors: IErrors;

  /* Whether the form has been successfully submitted */
  submitSuccess?: boolean;
}

const Form: React.FC<IFormProps> = ({ action, initialValues, formErrors, render }) => {
  const [errors, setErrors] = useState<IErrors>(formErrors);
  const [values, setValues] = useState<IValues>(initialValues);
  const [submitSuccess, setSuccess] = useState(undefined);

  const haveErrors = (errors: IErrors) => {
    let haveError: boolean = false;
    Object.keys(errors).map((key: string) => {
      if (errors[key].length > 0) {
        haveError = true;
      }
    });
    return haveError;
  };

  const updateState = (target: HTMLInputElement) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    if(haveErrors(errors))
    {
      validateForm();
    }
  };

  const validateForm = (): boolean => {
    let newErrors:IErrors = errors;
    let formisValid:boolean = true;
    newErrors.fullname ='';
    newErrors.email ='';

    if (!values["fullname"] || values["fullname"].trim().length==0) 
      {
        newErrors.fullname ='Please enter your fullname';
        formisValid=false;
      }

    let validEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    if (!validEmail.test(values["email"])) 
      {
        errors.email = 'Please enter valid email id';
        formisValid = false;
      }  
      
    setErrors({...errors,["fullname"]:newErrors.fullname,["email"]:newErrors.email});  
    return formisValid;
  };

  const submitForm = async (): Promise<boolean> => {
    // TODO - submit the form
    return true;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    console.log(values);

    if (validateForm()) 
    {
      await submitForm();
      setSuccess(true);
      setValues(initialValues);
    }else
    {
      setSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate={true} action={action}>
      <div className="container">
        {/* in the component where Form is used, the render prop will have form fields
        assigned to it */}
        {render(values, (e) => updateState(e.target as HTMLInputElement),errors)}

        <div className="form-group">
          <button
            type="submit"  
            className="block px-4 py-2 mx-auto border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            disabled={haveErrors(errors)}
          >
            Submit
          </button>
        </div>
        {submitSuccess && (
          <div className="alert alert-info" role="alert">
            The form was successfully submitted!
          </div>
        )}
        {submitSuccess === false && !haveErrors(errors) && (
          <div className="alert alert-danger" role="alert">
            Sorry, an unexpected error has occurred
          </div>
        )}
        {submitSuccess === false && haveErrors(errors) && (
          <div className="alert alert-danger" role="alert">
            Sorry, the form is invalid. Please review, adjust and try again
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
