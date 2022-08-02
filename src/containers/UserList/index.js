import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const data = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };

  useEffect(() => {
    data();
  }, []);

  return (
          <div>
            <Nav/>
            <div class="container px-5 my-5">
              <div class="text-center mb-5">
                <h1 class="fw-bolder">List User</h1>
              </div>

              <div class="row gx-5 content-center">
                {users.map((user) => {
                    return (
                      <div key={user.id} class="col-xl-4 mb-5">
                        <Link to={`/user/${user.id}`} className="text-reset text-decoration-none">
                          <div class="card mb-5 mb-xl-0">
                            <div class="card-body p-5">
                              <div class="mb-3 text-center">
                                <span class="fw-bolder"><img src={user.avatar} alt=""/></span>
                              </div>
                              <div class="text-center">
                                <span>{user.first_name}</span>
                                <p>{user.email}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>

          </div>
  );
}

export default UserList;