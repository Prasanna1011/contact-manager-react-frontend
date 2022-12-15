import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/contactDetail.css";

const ContactDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [detail, setdetail] = useState({});

  const getDetail = async () => {
    const URL = `http://localhost:5000/details/${id}`;
    const { data } = await axios.get(URL);
    console.log(data);
    setdetail(data);
  };
  const handleDelete = async (id) => {
    const URL = `http://localhost:5000/details/${id}`;
    const { data } = await axios.delete(URL);
    // setdetail(data);

    getDetail();
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div className="container  ">
      <div
        className="header d-flex justify-content-center "
        style={{ height: "100%" }}
      >
        <div
          className="card mb-3 mt-5  bg-dark text-light "
          style={{ maxWidth: "540px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={detail.img}
                style={{
                  height: "300px",
                  width: "350px",
                  objectFit: "contain",
                }}
                className="img-fluid rounded-start ms-3 "
              />
            </div>
            <div className="col-md-8 mt-5">
              <div className="card-body">
                <ul className="card-text">
                  <p>
                    <b>Name : {detail.name} </b>{" "}
                  </p>
                  <p> Email : {detail.email}</p>
                  <p> Phone : {detail.contact}</p>
                  <p> age : {detail.age}</p>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-center justify-content-evenly">
            <Link to="/">
              <button className="btn btn-primary">Home</button>
            </Link>
            <Link to={`/edit/${detail.id}`}>
              <button className="btn btn-warning">Edit</button>
            </Link>
            <button
              onClick={(e) => handleDelete(detail.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
