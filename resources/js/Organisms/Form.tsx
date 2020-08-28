import React, { useState, useEffect, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

interface IFormProps<IValues extends Record<string, any>> {
    /* The http path that the form will be posted to */
    action: string;
    initialValues: IValues;
    button: string;
    validate?: (values: IValues) => IErrors<IValues>;
    /* A prop which allows content to be injected */
    render: (
        val: IValues,
        handleChange: (
            e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        ) => void,
        errors: IErrors<IValues>,
        errorsFromBackend: IErrors<IValues>,
    ) => React.ReactNode;
}

export interface IFormState<IValues extends Record<string, any>> {
    /* The field values */
    values: IValues;
    /* The field validation error messages */
    errors: IErrors<IValues>;
    /* Whether the form has been successfully submitted */
    submitSuccess?: boolean;
}

export type IErrors<IValues extends Record<string, any>> = {
    [P in keyof IValues]?: string
};

const Form = <IValues extends Record<string, any>>({
    action,
    initialValues,
    button,
    render,
    validate,
}: IFormProps<IValues>) => {
    const { errors: errorsFromBackend, old } = usePage();
    const _isMounted = useRef(true);
    //https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks
    const [errors, setErrors] = useState<IErrors<IValues>>({});
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState<IValues>(old ? old : initialValues);
    const [submitSuccess, setSuccess] = useState(undefined);

    const haveErrors = (errors: IErrors<IValues>) => {
        let haveError: boolean = false;
        Object.keys(errors).map((key: string) => {
            if (errors[key].length > 0) {
                haveError = true;
            }
        });
        return haveError;
    };

    const updateState = (target: HTMLInputElement) => {
        const { name, value, type } = target;
        if (type === "checkbox") {
            let newSelection: any[];
            if (values[name].indexOf(value) > -1) {
                newSelection = values[name].filter(s => s !== value);
            } else {
                newSelection = [...values[name], value];
            }
            setValues({ ...values, [name]: newSelection });
        } else {
            setValues({ ...values, [name]: value });
        }

        if (haveErrors(errors)) {
            setErrors(validate(values));
        }
    };

    useEffect(() => {
        if (haveErrors(errors)) {
            setErrors(validate(values));
        }
    }, [values]);

    useEffect(() => {
        return () => {
            // ComponentWillUnmount in Class Component
            _isMounted.current = false;
        };
    }, []);

    // temporary
    if (action === "/profile") {
        useEffect(() => {
            // we will call API to get profileDetails values for user from database.
            //temporarily i have hardcoded value fot testing purpose.
            let profileDetails = {
                fullname: "ABC",
                email: "test@example.com",
                subtoteach: "React,larvel,Tailwind",
            };

            setValues({ ...values, ...profileDetails });
        }, []);
    }

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        e.preventDefault();

        const validated = validate(values);
        setErrors(validated);
        if (!haveErrors(validated)) {
            setSending(true);
            await Inertia.post(action, values)
                .then(() => {
                    if (_isMounted.current) {
                        setSending(false);
                        setSuccess(true);
                        // setValues(values);
                    }
                })
                .catch(err => console.log(err));
        } else {
            setSuccess(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate={true} action={action}>
            <div className="container">
                {/* in the component where Form is used, the render prop will have form fields
        assigned to it */}
                {render(
                    values,
                    e => updateState(e.target as HTMLInputElement),
                    errors,
                    errorsFromBackend,
                )}

                <div className="form-group">
                    {sending ? (
                        <p>Sending...</p>
                    ) : (
                        <button
                            type="submit"
                            className={
                                button !== "Login"
                                    ? "block mx-auto px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                                    : "w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                            }
                            disabled={haveErrors(errors)}
                        >
                            {button}
                        </button>
                    )}
                </div>
                {/* {submitSuccess && (
                    <div className="alert alert-info" role="alert">
                        The form was successfully submitted.
                    </div>
                )}*/}
                {/* submitSuccess === false && !haveErrors(errors) && (
                    <div className="alert alert-danger" role="alert">
                        Sorry, an unexpected error has occurred
                    </div>
                ) */}
                {submitSuccess === false && haveErrors(errors) && (
                    <div className="alert alert-danger" role="alert">
                        Sorry, the form is invalid. Please review, adjust and
                        try again
                    </div>
                )}
            </div>
        </form>
    );
};

export default Form;
