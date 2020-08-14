import React, { useState, useEffect } from "react";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import wordsRepository from '../repositories/words';

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

    function handlePostSubmit(params) {
        params.preventDefault();
        wordsRepository.create({
            word: "test2",
            box: 0
        })
            .then(() => {
                //TODO: Msg of ok or error
            });
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
        wordsRepository
            .getAll()
            .then((params) => {
                setCompareWords([...params].map(a => a.word));
            });
    }, []);

    return (
        <>
            <>
                <p>First step:</p>
                <form key="formGet"
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
                        <form onSubmit={handlePostSubmit} key="formPost">
                            <ul key={`${item}${index}`}>
                                {
                                    item.name.split(" ").map((sub, subindex) =>
                                        <li key={`${sub}${subindex}`}> {
                                            <>
                                                {compareWords.includes(sub.trim())
                                                    ?
                                                    <div>
                                                        <input type="checkbox" id={`${sub}${subindex}`} name="ckbWord" value={sub} defaultChecked></input>
                                                        <label htmlFor={`${sub}${subindex}`} style={{ color: "red" }}> {sub}</label>
                                                    </div>
                                                    :
                                                    <>
                                                        <input type="checkbox" id={`${sub}${subindex}`} name="ckbWord" value={sub}></input>
                                                        <label htmlFor={`${sub}${subindex}`}> {sub}</label>
                                                    </>
                                                }
                                            </>
                                        }
                                        </li>)
                                }


                            </ul>
                            <Button>Save</Button>
                        </form>
                    )
                }
            </>
        </>
    );
}


export default CheckWords;