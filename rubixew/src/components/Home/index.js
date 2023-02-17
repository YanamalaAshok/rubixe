import React, { useState } from "react";

import "./index.css";
import techTeensLogo from "../../assets/techTeensLogo.jpeg";
import Footer from "../Footer";
import ContactUs from "../ContactUs";

const cardsData = [
  {
    id: 1,
    bgColor: "blue",
    step: "01",
    description: " Introducing AI to children in age in Appropriate Manner",
    logo: "https://toppng.com/uploads/preview/artificial-intelligence-is-changing-the-legal-profession-artificial-intelligence-logo-11563062027pg19tyb3sh.png",
  },
  {
    id: 2,
    bgColor: "#a12566",
    step: "02",
    description:
      "  Gain awareness on AI and build an Interactive story around it",
    logo: "https://png.pngitem.com/pimgs/s/197-1976786_ai-package-icon-blue-transparent-artificial-intelligence-logo.png",
  },
  {
    id: 3,
    bgColor: "orange",
    step: "03",
    description: "  Acquire programming skills in a user-friendly format",
    logo: "https://png.pngtree.com/png-vector/20191016/ourmid/pngtree-artificial-intelligence-ai-chip-vector-sign-icon-png-image_1803938.jpg",
  },
  {
    id: 4,
    bgColor: "red",
    step: "04",
    description: "  Exposure to mini projects on diverse topics",
    logo: "https://toppng.com/uploads/preview/artificial-intelligence-is-changing-the-legal-profession-artificial-intelligence-logo-11563062027pg19tyb3sh.png",
  },
  {
    id: 5,
    bgColor: "green",
    step: "05",
    description: "  Train the teachers programme",
    logo: "https://thumbs.dreamstime.com/z/ai-vector-icon-isolated-transparent-background-linear-tra-outline-high-quality-transparency-concept-can-be-used-web-mobile-130114766.jpg",
  },
];

const Home = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");

  const [nameError, setNameError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (name.length > 30) {
      await setNameError(true);
    } else {
      await setNameError(false);
    }
    if (mobile.length !== 10) {
      await setMobileError(true);
    } else {
      await setMobileError(false);
    }

    if (name.length <= 30 && mobile.length === 10) {
      console.log("api call");
      const obj = {
        name,
        mobile,
        email,
      };
      // SET IT IN LOCA;
      // api call for stroing data
      alert("thank u we will get in touch with u");

      setName("");
      setmobile("");
      setemail("");
    }
  };

  return (
    <div>
      {/* main banner */}
      <div className="banner-container">
        <div className="banner"></div>
        <div className="content">
          <img
            src={techTeensLogo}
            alt="tech teens"
            className="tech-teens-logo "
          />
          <p className="banner-description mt-2 animate__animated  animate__flipInX">
            CARVING FEATURES
            <br />
            TECHNOLOGY PROFESSIONALS
            <br />
            OUT OF YOUNG MINDS
          </p>
        </div>
      </div>

      {/* who we are */}

      <div className="about-us-con">
        <div>
          <h1 className="about-heading ">WHO WE ARE</h1>
          <div className="about-img-con about-img-sm">
            <div className="img-border"></div>
            <img
              src="https://www.sessionlab.com/wp-content/uploads/productive-team-meetings-cover.jpg"
              alt="rubixe"
              className="about-img animate__animated animate__backInRight"
            />
            <div className="img-border border-right"></div>
          </div>
          <p className="about-description">
            Rubixe™ is a global technology company specializing in disruptive
            technologies - Artificial Intelligence (AI), Machine Learning,
            Robotic Process Automation (RPA). BlockChain, and Internet of Things
            (IoT).
          </p>

          <p className="about-description">
            Rubixe™ mission is to enable businesses to leverage the full
            potential of disruptive technologies and stay competitive in the
            market, turning complex challenges into solutions, providing a
            strategic competitive advantage that are more efficient, effective
            and predictable.
          </p>
          <p className="about-description">
            Rubixe™ mission is to enable businesses to leverage the full
            potential of disruptive technologies and stay competitive in the
            market, turning complex challenges into solutions, providing a
            strategic competitive advantage that are more efficient, effective
            and predictable.
          </p>
        </div>
        <div className="about-img-con about-img-md">
          <div className="img-border"></div>
          <img
            src="https://www.sessionlab.com/wp-content/uploads/productive-team-meetings-cover.jpg"
            alt="rubixe"
            className="about-img animate__animated animate__backInRight"
          />
          <div className="img-border border-right"></div>
        </div>
      </div>

      {/* where we started */}
      <div className="born">
        <h1>WHERE WE STARTED</h1>
        <p className="des">
          We started in 2015, with a passionate learn who want to bring
          game-changing solutions through disrupting technologies. We expertise
          in delivering enterprise-level solutions in the Artificial
          Intelligence(AI), CyberSecurity, Robotic Process Automation(RPA),
          Internet of Things(IOT), and BlockChain Technology.
        </p>
      </div>

      {/* tech for teens */}

      <div className="tech-teens">
        <h1 className="tech-teens-heading1">
          TECH FOR TEENS - A RUBIXE &#174; INTIATIVE
        </h1>
        <div className="cards-con">
          {cardsData.map((each) => (
            <div className="teens-card" key={each.id}>
              <div
                className="card-border"
                style={{ backgroundColor: each.bgColor }}
              >
                <div className="card-step-number">
                  <span>{each.step}</span>
                </div>
              </div>

              <img src={each.logo} alt="ai" className="card-logo" />
              <p className="card-description">{each.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* contact us */}

      {/* <div className="get-in-touch-con">
        <div className="contact-us">
          <div className="contact-info">
            <h1>GET IN TOUCH</h1>
            <p>Please complete the form and we will get back to you.</p>
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
      </div> */}
      <ContactUs />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
