import React, { useState } from "react";
import "./NewUserCss.css";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import toast, { Toaster } from "react-hot-toast";

const NewUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mo_no, setMobileNo] = useState("");
  const [batch, setBatch] = useState("Select Batch");

  const makePayment = async (e) => {
    e.preventDefault();

    if(!name || !email || !age || !mo_no || batch === "Select Batch"){
      toast.error("All fields are mandatory!");
      return;
    }

    const isEmailValid =
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    if (!isEmailValid) {
      toast.error("Email is NOT Valid!");
      return;
    }

    const isAgeValid = age < 18 || age > 65 ? false : true;
    if (!isAgeValid) {
      toast.error("Age must be between 18 to 65 to join Yoga Classes");
      return;
    }

    if (isNaN(mo_no) || mo_no.length !== 10) {
      toast.error("Please enter valid mobile number!");
      return;
    }

    const user = {
      name,
      age,
      email,
      mo_no,
      batch,
    };

    axios
      .post("https://yogaclasses-backend.onrender.com/api/v1/users/register", user)
      .then((response) => {
        // Handle success
        setAge("");
        setBatch("Select Batch");
        setEmail("");
        setName("");
        setMobileNo("");

        if (response.data.success) {
          toast.success(response.data.message);
        }

      })
      .catch((error) => {
        // Handle error
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="page">
      <div className="main_Box">
        <div className="left">
          <p className="head">New Registration</p>
          <label htmlFor="name" className="colwhite fntsz">
            Name
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            className="inpts colwhite"
            autoComplete="off"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label htmlFor="age" className="colwhite fntsz">
            Age
          </label>
          <br />
          <input
            type="text"
            name="age"
            id="age"
            className="inpts colwhite"
            autoComplete="off"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />

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

          <label htmlFor="mo_no" className="colwhite fntsz">
            Mobile No
          </label>
          <br />
          <input
            type="text"
            name="mo_no"
            id="mo_no"
            className="inpts colwhite"
            autoComplete="off"
            value={mo_no}
            onChange={(e) => {
              setMobileNo(e.target.value);
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
          <Toaster />
        </div>

        <div className="right">
          <figure>
            <img className="loginImg" src="/images/login.svg" alt="all" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default NewUser;