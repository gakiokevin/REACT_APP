import React from "react";
function DisplayInfo({ data, edit }) {
  return (
    <div className="details">
      <h2>THANK YOU FOR SUBMITTING YOUR DETAILS</h2>
      <div className="personaldetails">
        <h2>PERSONAL DETAILS</h2>
        <p>
          Full name: {data.fname} {data.lname}
        </p>
        <p> Mobile number: {data.number}</p>
        <p className="email">EMAIL: {data.email}</p>
      </div>
      <div className="education">
        <h2>EDUCATION LEVEL</h2>
        <p> INSTITUTION NAME: {data.institution}</p>
        <p>COURSE NAME: {data.title}</p>
        <p>YEAR OF GRADUATING: {data.gyear}</p>
      </div>
      <div className="work">
        <h2>YOUR WORK EXPERINECE</h2>
        {data.status === "employed" ? (
          <div className="WORK">
            <p>COMPANY NAME: {data.companyName}</p>
            <p>JOB TITLE: {data.jobTitle}</p>
          </div>
        ) : (
          <p>CURRENTLY {data.status}</p>
        )}
      </div>

      <button onClick={edit} className="editBtn">EDIT</button>
    </div>
  );
}
export default DisplayInfo;
