import React, { useState } from "react";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import wordsRepository from '../repositories/words';
import { LocaleContext } from '../../LocaleContext.js';
import Content from '../../data/Content/content.json';
import './style.css';

function CheckWords() {
    const defaultValues = { word: "" };
    const [locale] = React.useContext(LocaleContext);
    const [listOfWords, setlistOfWords] = useState([]);
    const [values, setValues] = useState(defaultValues);
    const [compareWords, setCompareWords] = useState([]);
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        listOfWords.pop();
        values.word = removeSpecialCharacters(values.word);
        easterEgg(values.word);
        setlistOfWords([...listOfWords, values]);
        clearForm();
        wordsRepository
            .getAll()
            .then((values) => {
                setCompareWords([...values].map(a => a.word));
            }
            ).catch(() => {

            });
    }

    function removeSpecialCharacters(value) {
        return value.replace(/\s+/g, " ").replace(/[!?@#$%^&*()+-,.;:'"`\\|]/g, "").trim();
    }

    function easterEgg(words) {
        if (words.includes("Okey Dokey")) {
            document.querySelector('#marioScreen').style.display = 'block';
        }
    }

    function clearForm() {
        setValues(defaultValues);
    }

    function getCheckedWordsFromForm() {
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
        const words = getCheckedWordsFromForm();
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
                        name="word"
                        value={values.word}
                        onChange={handleChange}
                        register={register({
                            required: "Required"
                        })}
                    />

                    <Button>{Content.language[locale].CheckWords_FirstStep_button}</Button>
                </form>
            </>
            <>
                {listOfWords.length > 0 && (
                    <h3 title={Content.language[locale].CheckWords_SecondStep_title}>{Content.language[locale].CheckWords_SecondStep_content}</h3>
                )}
                {
                    listOfWords.map((item, index) =>
                        <form onSubmit={handlePostSubmit} key="formPost">
                            <ul key={`${item}${index}`} className="ks-cboxtags">
                                {
                                    item.word.split(" ").map((subItem, subItemIndex) =>
                                        <li key={`${subItem}${subItemIndex}`}> {
                                            <>
                                                {compareWords.includes(subItem.trim())
                                                    ?
                                                    <>
                                                        <input type="checkbox" id={`${subItem}${subItemIndex}`} name="ckbWord" value={subItem} defaultChecked></input>
                                                        <label htmlFor={`${subItem}${subItemIndex}`}> {subItem}</label>
                                                    </>
                                                    :
                                                    <>
                                                        <input type="checkbox" id={`${subItem}${subItemIndex}`} name="ckbWord" value={subItem}></input>
                                                        <label htmlFor={`${subItem}${subItemIndex}`}> {subItem}</label>
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