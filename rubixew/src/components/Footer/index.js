import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { CgCopyright } from "react-icons/cg";
import "./index.css";

import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <div className="footer-container">
      <div className="footer-inner-con">
        <div className="inner-con">
          <div className="section1">
            <h4 className="heading">ABOUT US</h4>
            <p>
              Rubixe™ is a global technology company specializing in disruptive
              technologies – Artificial Intelligence (AI), Machine Learning,
              Robotic Process Automation (RPA), BlockChain and Internet of
              Things (IoT). Rubixe mission to enable businesses to leverage the
              full potential of disruptive technologies to stay competitive in
              the market.
            </p>
          </div>
          <div className="section2">
            <h4 className="heading">MENUS</h4>
            <div className="links">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/products">
                Products
              </Link>
              <Link className="link" to="/services">
                Services
              </Link>
              <Link className="link" to="/blog">
                Blog
              </Link>
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="section3">
            <h4 className="heading">ADDRESS</h4>
            <p>
              Novel Tech Park, 1st floor, Hosur Rd,
              <br />
              Kudlu gate, Bengaluru, Karnataka, 560068 <br />
              Phone:0804-717-8999 <br />
              Email: hi@rubixe.com
            </p>
            <h4 className="heading">SOCIAL MEDIA</h4>
            <div className="icons-con">
              <a
                href="https://www.facebook.com/Rubixe.Official/"
                rel="noreferrer"
                target="_blank"
                className="icon-con a"
              >
                <GrFacebookOption />
              </a>
              <a
                href="https://www.linkedin.com/company/rubixe/"
                rel="noreferrer"
                target="_blank"
                className="icon-con c"
              >
                <GrLinkedinOption />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <CgCopyright />
      Copyright 2017-2023 | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT.
      LTD. | All Rights Reserved
    </div>
  </>
);
export default Footer;
