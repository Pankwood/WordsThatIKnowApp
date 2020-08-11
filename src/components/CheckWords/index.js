import React, { useState, useEffect } from "react";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";


function CheckWords(params) {
    const defaultValues = { name: "" };
    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState(defaultValues);
    const [compareWords, setCompareWords] = useState([]);
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        categories.pop();
        setCategories([...categories, values]);
        setValues(defaultValues);
    }

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        });
    }

    function handleChange(params) {
        setValue(params.target.getAttribute("name"), params.target.value);
    }

    useEffect(() => {
        const URL = "https://localhost:44312/Words";
        fetch(URL)
            .then(async (params) => {
                const response = await params.json();
                setCompareWords([...response].map(a => a.word));
            });

    }, [compareWords]);

    return (
        <>
            <>
                <p>First step:</p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <FormField
                        error={errors.email && errors.email.message}
                        label="Paste your text here..."
                        type="textarea"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        register={register({
                            required: "Required"
                        })}
                    />

                    <Button>Check it!</Button>
                </form>
            </>
            <>
                {categories.length > 0 && (
                    <p>Second step: Check the words you already know</p>
                )}
                {
                    categories.map((item, index) =>
                        <ul key={`${item}${index}`}>
                            {
                                item.name.split(" ").map((sub, subindex) =>
                                    <li key={`${sub}${subindex}`}> {
                                        <>
                                            {compareWords.includes(sub.trim())
                                                ?
                                                <div>
                                                    <input type="checkbox" id={`${sub}${subindex}`} name={`${sub}${subindex}`} value={sub} defaultChecked></input>
                                                    <label htmlFor={`${sub}${subindex}`} style={{ color: "red" }}> {sub}</label>
                                                </div>
                                                :
                                                <>
                                                    <input type="checkbox" id={`${sub}${subindex}`} name={`${sub}${subindex}`} value={sub}></input>
                                                    <label htmlFor={`${sub}${subindex}`}> {sub}</label>
                                                </>
                                            }
                                        </>
                                    }
                                    </li>)
                            }


                        </ul>
                    )
                }
            </>
        </>
    );
}


export default CheckWords;