import React, { useState } from "react";
function CVFORM({ onSubmit }) {
  const [FormData, updateData] = useState({
    fname:'',
    lname: "",
    number: "",
    email: "",
    institution: "",
    title: "",
    gyear: "",
    status: "unemployed",
    companyName: "",
    jobTitle: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData(() => ({
      ...FormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(FormData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend> PERSONAL DETAILS (Part 1 out of 3)</legend>
        <div className="wrapper">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={FormData.fname}
            onChange={handleChange}
            placeholder="Enter your first name ..."
            required
          />
        </div>
        <div className="wrapper">
          <label htmlFor="lname">last Name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={FormData.lname}
            onChange={handleChange}
            placeholder="Enter your last name ..."
            required
          />
        </div>
        <div className="wrapper">
          <label htmlFor="number">Phone number:</label>
          <input
            type="text"
            id="number"
            name="number"
            value={FormData.number}
            onChange={handleChange}
            placeholder="Enter your phone number ..."
            required
          />
        </div>
        <div className="wrapper">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={FormData.email}
            onChange={handleChange}
            placeholder="eg. kevin123@gmail.com"
            required
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>EDUCATION DETAILS (Part 2 out of 3)</legend>
        <div className="wrapper">
          <label htmlFor="instituion">Institution Name: </label>
          <input
            type="text"
            name="institution"
            id="institution"
            value={FormData.institution}
            onChange={handleChange}
            placeholder="Name of your institution ..."
            required
          />
        </div>
        <div className="wrapper">
          <label htmlFor="title">COURSE TITLE:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={FormData.title}
            onChange={handleChange}
            placeholder="course pursuing ..."
            required
          />
        </div>
        <div className="wrapper">
          <label htmlFor="gYear">Year of graduation:</label>
          <input
            type="date"
            name="gyear"
            id="gYear"
            value={FormData.gyear}
            onChange={handleChange}
            required
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>WORK EXPERIENCE (Part 3 out of 3)</legend>
        <div className="wrapper">
          <select
            name="status"
            id="workstatus"
            value={FormData.status}
            onChange={handleChange}
          >
            <option value="employed">employed</option>
            <option value="unemployed">unemployed</option>
          </select>
        </div>
        {FormData.status === "employed" && (
          <div className="employed">
            <div className="wrapper">
              <label htmlFor="companyName">Company name:</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={FormData.companyName}
                onChange={handleChange}
                placeholder="company name"
                required
              />
            </div>
            <div className="wrapper">
              <label htmlFor="jobTitle">Job title:</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={FormData.jobTitle}
                onChange={handleChange}
                placeholder="job title"
                required
              />
            </div>
          </div>
        )}
      </fieldset>
      <button type="submit">SUBMIT</button>
    </form>
  );
}
export default CVFORM;
