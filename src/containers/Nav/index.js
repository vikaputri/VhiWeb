import React from "react";
import { useHistory } from 'react-router-dom';

const Nav = () => {
  let history = useHistory();

  const logout = () => {
  	sessionStorage.setItem("data",'');
    sessionStorage.clear();
    history.push('/');
   }

  return (
    <nav class="navbar navbar-dark bg-primary">
      <a class="navbar-brand px-5">
        <button class="btn btn-primary" onClick={()=> history.push("/user")}>Home</button>
      </a>
      <form class="form-inline px-5">
        <button class="btn btn-primary" onClick={logout}>Logout</button>
      </form>
    </nav>
  );
}

export default Nav;