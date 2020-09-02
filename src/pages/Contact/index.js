import React, { useState } from 'react';
import PageDefault from "../../components/PageDefault";
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import { useForm } from "react-hook-form";
import Content from '../../data/Content/content.json';
import { LocaleContext } from '../../LocaleContext';

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

    const [locale] = React.useContext(LocaleContext);
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
            <h1>{Content.language[locale].Contact_title}</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <FormField
                    error={errors.email && errors.email.message}
                    label={Content.language[locale].Contact_Form_email}
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    register={register({
                        required: Content.language[locale].Contact_Form_erro1,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: Content.language[locale].Contact_Form_erro2
                        }
                    })}
                />

                <FormField
                    error={errors.subject && errors.subject.message}
                    label={Content.language[locale].Contact_Form_subject}
                    type="text"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    register={register({
                        required: Content.language[locale].Contact_Form_erro1
                    })}
                />

                <FormField
                    error={errors.body && errors.body.message}
                    label={Content.language[locale].Contact_Form_body}
                    type="textarea"
                    name="body"
                    value={values.body}
                    onChange={handleChange}
                    register={register({
                        required: Content.language[locale].Contact_Form_erro1,
                        minLength: {
                            value: 80,
                            message: Content.language[locale].Contact_Form_erro3
                        }
                    })}
                />


                <Button>{Content.language[locale].Contact_button}</Button>
            </form>

        </PageDefault>
    );
}

export default Contact;