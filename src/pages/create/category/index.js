import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

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
      <h1>Create Category</h1>

      <form
        onSubmit={function handleSubmit(params) {
          params.preventDefault();
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
          label="Description"
          type="textarea"
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

        <Button>Create</Button>
      </form>

      <div>
        <table>
          {categories.length > 0 && (
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Color</th>
              </tr>
            </thead>
          )}

          {categories.map((category, index) => {
            return (
              <tbody key={`${category}${index}`}>
                <tr>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>{category.color}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </PageDefault>
  );
}

export default CreateCategory;
