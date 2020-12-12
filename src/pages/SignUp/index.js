import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Button from "../../components/Button";
import FormField from "../../components/FormField";
import PageDefault from "../../components/PageDefault";
import { LocaleContext } from "../../LocaleContext";
import Content from '../../data/Content/content.json';
import { useForm } from "react-hook-form";
import './index.css';
import usersRepository from '../../components/repositories/users';


function Signup() {
    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    };

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        });
    }

    const [locale] = React.useContext(LocaleContext);
    const [values, setValues] = useState(defaultValues);
    const { handleSubmit, register, errors, watch } = useForm();
    const onSubmit = values => {
        console.log(values);
        usersRepository.register(values)
            .then(() => {

            })
            .catch(() => {

            });
        setValues(defaultValues);
    }

    function handleChange(params) {
        setValue(params.target.getAttribute("name"), params.target.value);
    }
    return (
        <PageDefault>
            <h1>{Content.language[locale].SignUp_title}</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField
                    error={errors.firstName && errors.firstName.message}
                    label={Content.language[locale].Contact_Form_firstName}
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    register={register({
                        required: Content.language[locale].Contact_Form_erro1,
                    })}
                />

                <FormField
                    error={errors.lastName && errors.lastName.message}
                    label={Content.language[locale].Contact_Form_lastName}
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    register={register({
                        required: Content.language[locale].Contact_Form_erro1,
                    })}
                />

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
                        required: Content.language[locale].Contact_Form_erro4,
                        minLength: {
                            value: 8,
                            message: Content.language[locale].Contact_Form_erro5,
                        }
                    })}
                    passwordFieldIndex={0}
                />

                <FormField
                    error={errors.passwordConfirmation && errors.passwordConfirmation.message}
                    label={Content.language[locale].SignUp_Form_password}
                    type="password"
                    name="passwordConfirmation"
                    value={values.passwordConfirmation}
                    onChange={handleChange}
                    register={register({
                        required: Content.language[locale].Contact_Form_erro4,
                        minLength: {
                            value: 8,
                            message: Content.language[locale].Contact_Form_erro5,
                        },
                        validate: (value) => value === watch('password') || Content.language[locale].Contact_Form_erro6
                    })}
                    passwordFieldIndex={1}
                />

                <Button>{Content.language[locale].SignUp_title}</Button>
            </form>
            <div className="SignUpLinkLogin">
                <Link to="/login">{Content.language[locale].SignUp_Link_login}</Link>
            </div>
        </PageDefault>
    );
}

export default Signup;