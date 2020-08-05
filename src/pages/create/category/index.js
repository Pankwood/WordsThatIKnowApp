import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CreateCategory(params) {
  const [categories, setCategories] = useState(["Test", "OtherTest"]);
  const [categoryName, setCategoryName] = useState("Filmes");
  console.log("[categoryName]", categoryName);

  return (
    <PageDefault>
      <h1>Create Category {categoryName}</h1>

      <form>
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={categoryName}
            onChange={function handleChange(params) {
              setCategoryName(params.target.value);
            }}
          />
        </label>

        <ul>
          {categories.map((category) => {
            return <li>{category}</li>;
          })}
        </ul>
        <button>Cadastrar</button>
      </form>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CreateCategory;
