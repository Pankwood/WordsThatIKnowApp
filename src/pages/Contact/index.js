import React, { useState } from 'react';
import PageDefault from "../../components/PageDefault";
import FormField from '../../components/FormField';
import Button from '../../components/Button';

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

    function handleChange(params) {
        setValue(params.target.getAttribute("name"), params.target.value);
    }
    return (
        <PageDefault>
            <h1>Contact</h1>

            <form
                onSubmit={function handleSubmit(params) {
                    params.preventDefault();
                    setValues(defaultValues);
                }}
            >
                <FormField
                    label="Your email"
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />

                <FormField
                    label="Subject"
                    type="text"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                />

                <FormField
                    label="Write something..."
                    type="textarea"
                    name="description"
                    value={values.body}
                    onChange={handleChange}
                />

                <Button>Send</Button>
            </form>

        </PageDefault>
    );
}

export default Contact;