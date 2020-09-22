import React, { useState } from 'react';
import PageDefault from "../../components/PageDefault";
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import { useForm } from "react-hook-form";
import Content from '../../data/Content/content.json';
import { LocaleContext } from '../../LocaleContext';

function Login(params) {
    const defaultValues = {
        email: "",
        password: "",
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
            <h1>{Content.language[locale].Login_title}</h1>

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
                    error={errors.password && errors.password.message}
                    label={Content.language[locale].Contact_Form_password}
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    register={register({
                        required: Content.language[locale].Contact_Form_erro4
                    })}
                />


                <Button>{Content.language[locale].Login_button}</Button>
            </form>

        </PageDefault>
    );
}

export default Login;