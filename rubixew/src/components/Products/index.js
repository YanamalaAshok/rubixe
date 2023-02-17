import React from "react";

const Products = () => {
  return (
    <div
      style={{
        height: "100vh",
        widhth: "100vw",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "60px",
        fontWeight: "600",
      }}
    >
      Products
      <br />
      <a className="btn btn-primary" href="/contact">
        get in touch
      </a>
    </div>
  );
};

export default Products;
