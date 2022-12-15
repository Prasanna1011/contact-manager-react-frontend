import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const [edit, setedit] = useState({});
  const { id } = useParams();
  console.log(id);

  const getData = async () => {
    const URL = `http://localhost:5000/details/${id}`;
    const { data } = await axios.get(URL);
    console.log(data);
    setedit(data);
  };
  const handleEdit = async () => {
    const URL = `http://localhost:5000/details/${id}`;
    const { data } = await axios.put(URL, edit);
    setedit(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-5  d-flex justify-content-center">
            <div class="card text-center" style={{ width: "18rem" }}>
              <img
                src={edit.img}
                class="card-img-center"
                alt="..."
                style={{
                  height: "200px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
              <div class="card-body">
                <h5 class="card-title">Name : {edit.name}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Contact : {edit.contact}</li>
                <li class="list-group-item">Email : {edit.email}</li>
                <li class="list-group-item">Age : {edit.age}</li>
              </ul>
              <div class="card-body">
                <Link to="/">
                  <button className="btn btn-primary">Home</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-5 ">
            <div className="container  ">
              <div className="row mt-2 me-2">
                <div className="col-sm-12 offset-sm-3 ">
                  <div className="card">
                    <div className="card-header ">Add Contact</div>
                    <div className="card-body">
                      <div>
                        <label htmlFor="name" className="form-label">
                          First Name
                        </label>
                        <input
                          value={edit.name}
                          onChange={(e) =>
                            setedit({ ...edit, name: e.target.value })
                          }
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="form-label">
                          First Email
                        </label>
                        <input
                          value={edit.email}
                          onChange={(e) =>
                            setedit({ ...edit, email: e.target.value })
                          }
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Enter Your Email"
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="contact" className="form-label">
                          Contact
                        </label>
                        <input
                          value={edit.contact}
                          onChange={(e) =>
                            setedit({ ...edit, contact: e.target.value })
                          }
                          type="number"
                          className="form-control"
                          id="contact"
                          placeholder="Enter Your Contact No."
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="age" className="form-label">
                          Age
                        </label>
                        <input
                          value={edit.age}
                          onChange={(e) =>
                            setedit({ ...edit, age: e.target.value })
                          }
                          type="text"
                          className="form-control"
                          id="age"
                          placeholder="Enter Your Age"
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="img" className="form-label">
                          Image URL
                        </label>
                        <input
                          value={edit.img}
                          onChange={(e) =>
                            setedit({ ...edit, img: e.target.value })
                          }
                          type="text"
                          className="form-control"
                          id="img"
                          placeholder="Enter Your Contact No."
                        />
                      </div>
                      <Link to={"/"}>
                        <button
                          onClick={handleEdit}
                          type="button"
                          className="btn btn-primary w-100 mt-3"
                        >
                          Submit Changes
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditContact;
