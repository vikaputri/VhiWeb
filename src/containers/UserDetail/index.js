import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import Nav from "../Nav";

function Detail() {
  let { id } = useParams();
  const [users, setUsers] = useState([]);

  const data = async () => {
    const res = await fetch("https://reqres.in/api/users/"+id);
    const json = await res.json();
    setUsers(json.data);
  };

  useEffect(() => {
    data();
  }, []);

  return (
          <div class="bg-light">
            <Nav/>
            <div class="container px-5 my-5">
              <div class="row justify-content-center">
                <div class="col-lg-6">

                  <div class="card">
                    <form class="py-5 px-5 bg-primary text-white">
                      <h2 class="fw-bolder text-center mb-3">{users.first_name}</h2>
                      <div class="text-center mb-3">
                        <img src={users.avatar} />
                      </div>
                      <div class="form-group row mb-2">
                        <label class="col-sm-4 col-form-label">Fist Name</label>
                        <label class="col-sm-8 col-form-label">{users.first_name}</label>
                      </div>
                      <div class="form-group row mb-2">
                        <label class="col-sm-4 col-form-label">Last Name</label>
                        <label class="col-sm-8 col-form-label">{users.last_name}</label>
                      </div>
                      <div class="form-group row mb-2">
                        <label class="col-sm-4 col-form-label">Email</label>
                        <label class="col-sm-8 col-form-label">{users.email}</label>
                      </div> 
                    </form>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
  )
};

export default Detail;