import React from "react";
import { useHistory } from 'react-router-dom';

const Error = () => {
  const history = useHistory();
  return (
    <div class="container py-5 text-center">
      <div class="mb-3">
        <h1 class="main-heading">Oops! Page not found </h1>
        <p>The page you ara looking for was not found.</p>
      </div>
      <button class="btn btn-primary" onClick={()=> history.push("/")}>Back to Home</button>
    </div>
  );
}

export default Error;