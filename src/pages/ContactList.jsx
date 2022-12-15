import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ContactList = () => {
  const id = useParams();
  const [contact, setContact] = useState([]);

  const getContacts = async () => {
    const URL = `http://localhost:5000/details`;
    const { data } = await axios.get(URL);

    console.log(data);
    setContact(data);
  };

  const handleDelete = async (id) => {
    const URL = `http://localhost:5000/details/${id}`;
    const { data } = await axios.delete(URL);
    console.log(data);
    getContacts();
  };

  useEffect(() => {
    getContacts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="buttonParent justify-content-center text-center  ">
          <Link to={"/addContact"}>
            <button className="btn btn-primary w-75 mt-2 border-rounded ">
              Add New Contact
            </button>
          </Link>
        </div>
        <div className="row">
          {contact.map((i) => (
            <>
              <div className="col-md-4 mt-3">
                <div className="card border border-primary  bg-dark text-light boredr-">
                  <div className="card-header d-flex justify-content-center">
                    <img
                      src={i.img}
                      className="rounded-circle border border-1 border-primary"
                      alt=""
                      style={{
                        height: "200px",
                        width: "200px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="card-body  ">
                    <div className="heading header d-flex justify-content-center align-center ">
                      <h2>
                        Name : <span>{i.name}</span>
                      </h2>
                    </div>

                    <div className="emaildata header d-flex justify-content-center">
                      <p style={{ fontSize: "20px" }}>
                        Email: <span>{i.email}</span>
                      </p>
                    </div>
                    <div className="card-footer d-flex justify-content-evenly">
                      <Link to={`/detail/${i.id}`}>
                        <button className="btn btn-primary"> View</button>
                      </Link>
                      <Link to={`/edit/${i.id}`}>
                        <button className="btn btn-warning"> Edit</button>
                      </Link>
                      <Link>
                        <button
                          onClick={(e) => handleDelete(i.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactList;
