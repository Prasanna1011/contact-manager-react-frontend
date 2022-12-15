import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddContact = () => {
  const [contact, setContact] = useState({});

  const handleSubmit = () => {
    const url = "http://localhost:5000/details";
    const { data } = axios.post(url, contact);
    console.log(contact);
  };
  return (
    <>
      <div className="container ">
        <div className="row mt-2">
          <div className="col-sm-6 offset-sm-3 ">
            <div className="card">
              <div className="card-header ">Add Contact</div>
              <div className="card-body">
                <div>
                  <label htmlFor="name" className="form-label">
                    First Name
                  </label>
                  <input
                    value={contact.name}
                    onChange={(e) =>
                      setContact({ ...contact, name: e.target.value })
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
                    value={contact.email}
                    onChange={(e) =>
                      setContact({ ...contact, email: e.target.value })
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
                    value={contact.contact}
                    onChange={(e) =>
                      setContact({ ...contact, contact: e.target.value })
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
                    value={contact.age}
                    onChange={(e) =>
                      setContact({ ...contact, age: e.target.value })
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
                    value={contact.img}
                    onChange={(e) =>
                      setContact({ ...contact, img: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    id="img"
                    placeholder="Enter Your Contact No."
                  />
                </div>
                <Link to={"/"}>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-primary w-100 mt-3"
                  >
                    Add Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContact;
