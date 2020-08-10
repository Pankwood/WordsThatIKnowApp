import React, { useState } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import BannerMain from "../../components/BannerMain";
import data from "../../data/data.json";
import { useForm } from "react-hook-form";

function Home() {
  const defaultValues = {
    name: "",
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(defaultValues);
  const compareWords = ["criado", "React"];
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
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

  return (
    <>
      <Menu />
      <BannerMain
        videoTitle={data.categories[0].videos[0].title}
        url={data.categories[0].videos[0].url}
        videoDescription={"O que é o Front-End?"}
      />
      <div>
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
      </div>
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
                      {!compareWords.includes(sub)
                        ?
                        <>
                          <input type="checkbox" id={`${sub}${subindex}`} name={`${sub}${subindex}`} value={sub}></input>
                          <label htmlFor={`${sub}${subindex}`}> {sub}</label>
                        </>
                        :
                        <><input type="checkbox" id={`${sub}${subindex}`} name={`${sub}${subindex}`} value={sub} defaultChecked></input>
                          <label htmlFor={`${sub}${subindex}`} style={{ color: "red" }}> {sub}</label>
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
      <Footer />
    </>
  );
}

export default Home;
