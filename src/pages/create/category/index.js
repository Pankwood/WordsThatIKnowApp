import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CreateCategory(params) {
  return (
    <PageDefault>
      <h1>Create Category</h1>
      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CreateCategory;
