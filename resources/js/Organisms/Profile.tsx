import React from "react";
import Form, { IErrors } from "@/Organisms/Form";
import FormTextInput from "@/Molecules/FormTextInput";


type ProfilPageValues = {
    fullname: string;
    email: string;
    subtoteach: string;
    subtolearn: string;
    meetduration: string;
    meetfrequency: string;
};

const validate = (values: ProfilPageValues) => {
    let errors: IErrors<ProfilPageValues> = {};

   if (!values.fullname || values.fullname.trim().length === 0) {
        errors.fullname = "Please enter your fullname";
    }

    let validEmail = /^.+@.+\..+$/;
    if (!validEmail.test(values.email)) {
        errors.email = "Please enter valid email address";
    }

    return errors;
};

const Profile: React.FC = () => {
    return (
        <Form<ProfilPageValues>
            action="/profile"
            initialValues={{
                fullname: "",
                email: "",
                subtoteach:"",
                subtolearn:"",
                meetduration: "",
                meetfrequency:""  
            }}
            validate={validate}
            button="Update"
            render={(values, handleChange, errors) => (
                <React.Fragment>
                    <FormTextInput
                        type="text"
                        name="fullname"
                        label="Full name"
                        value={values.fullname}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5">
                        {errors["fullname"]}
                    </div>
                    <FormTextInput
                        type="email"
                        name="email"
                        label="Email address"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5">
                        {errors["email"]}
                    </div>
                    <FormTextInput
                        type="text"
                        name="subtoteach"
                        label="Technologies i am interested in mentoring"
                        value={values.subtoteach}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <FormTextInput
                        type="text"
                        name="subtolearn"
                        label="Technologies i am interested to learn"
                        value={values.subtolearn}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <FormTextInput
                        type="text"
                        name="meetfrequency"
                        label="How often i can attend meetup"
                        value={values.meetfrequency}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                    <FormTextInput
                        type="text"
                        name="meetduration"
                        label="How long i will be with mentoring program"
                        value={values.meetduration}
                        onChange={handleChange}
                    />
                    <div className="block text-sm font-medium text-red-500 pb-5" />
                </React.Fragment>
            )}
        />
    );
};

export default Profile;

