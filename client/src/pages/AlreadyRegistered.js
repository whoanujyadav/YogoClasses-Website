import React, { useState } from "react";
import "./AlreadyRegisteredCss.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

const NewUser = () => {
  const [email, setEmail] = useState("");
  const [batch, setBatch] = useState("Select Batch");

  const makePayment = async (e) => {
    e.preventDefault();

    if(!email || batch === "Select Batch"){
      toast.error("All fields are mandatory!");
      return;
    }

    const isEmailValid =
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    if (!isEmailValid) {
      toast.error("Email ID is not valid");
      return;
    }

    const user = {
      email,
      batch
    };

    axios
      .post("https://yogaclasses-backend.onrender.com/api/v1/users/login", user)
      .then((response) => {
        // Handle success
        setBatch("Select Batch");
        setEmail("");

        if (response.data.success) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }

      })
      .catch((error) => {
        // Handle error
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="page">
      <div className="reg__main_Box">
        <div className="left">
          <p className="head">Already Registered</p>

          <label htmlFor="email" className="colwhite fntsz">
            Email
          </label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            className="inpts colwhite"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <DropdownButton id="dropdown-basic-button" title={batch}>
            <Dropdown.Item onClick={() => setBatch("6-7 AM")}>
              6-7 AM
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setBatch("7-8 AM")}>
              7-8 AM
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setBatch("8-9 AM")}>
              8-9 AM
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setBatch("5-6 PM")}>
              5-6 PM
            </Dropdown.Item>
          </DropdownButton>
          <br />

          <Button
            // disabled={isLoading}
            variant="primary"
            style={{ width: "100%", marginTop: "15px" }}
            onClick={makePayment}
          >
            Make Payment
          </Button>
          {/* <Button disabled = {isLoading} variant="primary" style={{ "width": "100%", "marginTop": "15px" } onClick={handleSubmit}} >Sign Up</Button> */}
          {/* {<div className="error"></div>} */}
          <Toaster/>
        </div>

        <div className="right">
          <figure>
            <img className="reg__loginImg" src="/images/login.svg" alt="all" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
