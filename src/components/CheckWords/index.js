import React, { useState } from "react";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import wordsRepository from '../repositories/words';
import { LocaleContext } from '../../LocaleContext.js';
import Content from '../../data/Content/content.json';
import './style.css';

function CheckWords() {
    const defaultValues = { name: "" };
    const [locale] = React.useContext(LocaleContext);
    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState(defaultValues);
    const [compareWords, setCompareWords] = useState([]);
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        categories.pop();
        setCategories([...categories, values]);
        setValues(defaultValues);
        wordsRepository
            .getAll()
            .then((values) => {
                setCompareWords([...values].map(a => a.word));
            }
            ).catch(() => {

            });
    }

    function getWords() {
        const words = document.forms[1];
        var wordsArray = [];
        for (var i = 0; i < words.length; i++) {
            if (words[i].checked) {
                wordsArray.push({ word: words[i].value, box: 0 });
            }
        }
        return wordsArray;
    }

    function handlePostSubmit(params) {
        params.preventDefault();
        const words = getWords();
        wordsRepository.create(words)
            .then(() => {

            })
            .catch(() => {

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

    return (
        <>
            <>
                <h3 title={Content.language[locale].CheckWords_FirstStep_title}>{Content.language[locale].CheckWords_FirstStep_content}</h3>
                <form key="formGet"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <FormField
                        error={errors.email && errors.email.message}
                        label={Content.language[locale].CheckWords_FirstStep_title}
                        type="textarea"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        register={register({
                            required: "Required"
                        })}
                    />

                    <Button>{Content.language[locale].CheckWords_FirstStep_button}</Button>
                </form>
            </>
            <>
                {categories.length > 0 && (
                    <h3 title="Check the words you already know">{Content.language[locale].CheckWords_SecondStep_content}</h3>
                )}
                {
                    categories.map((item, index) =>
                        <form onSubmit={handlePostSubmit} key="formPost">
                            <ul key={`${item}${index}`} className="ks-cboxtags">
                                {
                                    item.name.split(" ").map((sub, subindex) =>
                                        <li key={`${sub}${subindex}`}> {
                                            <>
                                                {compareWords.includes(sub.trim())
                                                    ?
                                                    <>
                                                        <input type="checkbox" id={`${sub}${subindex}`} name="ckbWord" value={sub} defaultChecked></input>
                                                        <label htmlFor={`${sub}${subindex}`}> {sub}</label>
                                                    </>
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
                            <Button>{Content.language[locale].CheckWords_SecondStep_button}</Button>
                        </form>
                    )
                }
            </>
        </>
    );
}


export default CheckWords;