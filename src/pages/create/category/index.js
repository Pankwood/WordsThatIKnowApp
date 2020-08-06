import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

function CreateCategory() {
  const defaultValues = {
    name: "",
    description: "",
    color: "#000000",
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(defaultValues);

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
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategories([...categories, values]);

          setValues(defaultValues);
        }}
      >
        <FormField
          label="Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Description:"
          type="????"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <button>Create</button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category}${index}`}>
              {category.name} {category.description} {category.color}
            </li>
          );
        })}
      </ul>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CreateCategory;
