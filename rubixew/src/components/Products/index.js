import React from "react";

const Products = () => {
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
      PRODUCTS
      <img
        className="animate__animated  animate__backInLeft"
        src="https://rubixe.com/assets/img/products/chatbot.png"
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
          fontWeight: "300",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        The chatbots disruption is unleashing applications from healthcare
        assistance to transforming entire BPO industry build on customer support
        services.
        <r />
        With the advances in the field of Natural Language Processing (NLP) and
        TTS (Text to Speech).
      </p>
      <br />
    </div>
  );
};

export default Products;
