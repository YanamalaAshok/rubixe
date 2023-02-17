import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");

  const [nameError, setNameError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (name.length > 30) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (mobile.length !== 10) {
      setMobileError(true);
    } else {
      setMobileError(false);
    }

    setTimeout(() => {
      if (!nameError && !mobileError) {
        console.log("api call");
        const obj = {
          name,
          mobile,
          email,
        };
        // SET IT IN LOCAL STORAGE

        // api call for stroing data
        alert("Thank you we will get in touch with you shortly");

        setName("");
        setmobile("");
        setemail("");
      }
    }, 3000);
  };

  return (
    <div className="get-in-touch-con" id="contact">
      <div className="contact-us">
        <div className="contact-info">
          <h1>GET IN TOUCH</h1>
          <p>please complete the form and we will get back to you soon</p>
        </div>
        <div className="hr"></div>
        <div className="form-con">
          <form className="contact-form" onSubmit={onSubmitForm}>
            <div className="input-con">
              <label for="name" className="input-label">
                Name*
              </label>
              <input
                type="text"
                id="name"
                className={`user-input ${nameError ? "err-msg" : " "}`}
                placeholder="Enter name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {nameError && (
                <span style={{ color: "red" }}>name cannot exceed 30</span>
              )}
            </div>
            <div className="input-con">
              <label for="email" className="input-label">
                Email*
              </label>
              <input
                className="user-input"
                type="email"
                id="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="input-con">
              <label for="Mobile" className="input-label">
                Mobile*
              </label>
              <input
                value={mobile}
                onChange={(e) => {
                  setmobile(e.target.value);
                }}
                className={`user-input ${mobileError ? "err-msg" : " "}`}
                type="number"
                id="Mobile"
                placeholder="Enter Mobile without +91"
                required
              />
              {mobileError && (
                <span style={{ color: "red" }}>please check number</span>
              )}
            </div>
            <button className="submit-btn" type="submit">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
