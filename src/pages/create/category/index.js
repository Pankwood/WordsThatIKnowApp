import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CreateCategory(params) {
  return (
    <PageDefault>
      <h1>Create Category</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>Cadastrar</button>
      </form>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CreateCategory;
