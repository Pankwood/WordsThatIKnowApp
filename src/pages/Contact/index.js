import React, { useState } from 'react';
import PageDefault from "../../components/PageDefault";
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import { useForm } from "react-hook-form";

function Contact(params) {

    const defaultValues = {
        subject: "",
        body: "",
        email: "",
    };

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        });
    }

    const [values, setValues] = useState(defaultValues);
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
        setValues(defaultValues);
    }

    function handleChange(params) {
        setValue(params.target.getAttribute("name"), params.target.value);
    }
    return (
        <PageDefault>
            <h1>Contact</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <FormField
                    error={errors.email && errors.email.message}
                    label="Your email"
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    register={register({
                        required: "Requiressssssd",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                />

                <FormField
                    error={errors.subject && errors.subject.message}
                    label="Subject"
                    type="text"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    register={register({
                        required: "Required"
                    })}
                />

                <FormField
                    error={errors.body && errors.body.message}
                    label="Write something..."
                    type="textarea"
                    name="body"
                    value={values.body}
                    onChange={handleChange}
                    register={register({
                        required: "Required",
                        minLength: {
                            value: 80,
                            message: "Minimum 80 characters"
                        }
                    })}
                />


                <Button>Send</Button>
            </form>

        </PageDefault>
    );
}

export default Contact;