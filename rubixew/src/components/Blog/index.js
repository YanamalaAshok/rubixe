import React from "react";

const Blog = () => {
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
      BLOG
      <img
        className="animate__animated  animate__backInLeft"
        src="https://rubixe.com//assets/img/blog/AI-Blog.jpg"
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
          fontWeight: "200",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        The advanced use of AI technology is changing the way people live and
        work.
        <br /> This blog speaks about the top 12 AI trends to watch in 2020.{" "}
        <br />
        In short, 2020 will be an exciting year for AI development.
      </p>
      <br />
    </div>
  );
};

export default Blog;
