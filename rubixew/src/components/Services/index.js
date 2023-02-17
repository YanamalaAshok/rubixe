import React from "react";

const Services = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "60px",
        fontWeight: "600",
        backgroundColor: "lightblue",
      }}
    >
      SERVICES
      <img
        className="animate__animated  animate__backInLeft"
        src="https://rubixe.com/assets/img/services/technology-staffing.jpg"
        alt="img"
        style={{
          height: "50vh",
          paddingBottom: "20px",
        }}
      />
      <a
        className="btn"
        style={{
          height: "40px",
          width: "25vw",
          textAlign: "center",
          backgroundColor: "#1e2e61",
          fontSize: "18px",
          color: "white",
        }}
        href="/contact"
      >
        Get in touch
      </a>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "400",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        TRubixe provides reliable and high-quality staffing solutions that offer
        you the ability to build your staff strength .
        <br />
        At Rubixe, Staffing is a fast-growing vertical, managed by senior
        professionals.
      </p>
      <br />
    </div>
  );
};

export default Services;
