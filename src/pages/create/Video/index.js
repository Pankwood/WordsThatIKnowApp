import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CreateVideo(params) {
  return (
    <PageDefault>
      <h1>Create Video</h1>
      <Link to="/create/video">Create Category</Link>
    </PageDefault>
  );
}

export default CreateVideo;
