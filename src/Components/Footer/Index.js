import React, { useState, useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
import "./Style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center divsub">
            <h4 className="h3sub">
              Be the first to know about new arrivals, sales & promos!
            </h4>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="form">
                <input
                  type="email"
                  id="email"
                  className="form_input"
                  placeholder=" "
                />
                <label htmlFor="email" className="form_label">
                  Subscribe
                </label>
              </div>
              <div className="submitsubscribe">
              <EmailIcon className="iconsubsub"/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" col-md-4">
            <h6>About Us</h6>
            <p className="text-justify p_footer">
              With 20 years of presence and expertise in the Middle East and the
              Gulf market, 85 stores across 9 countries (UAE, Kuwait, Saudi
              Arabia, Egypt, Lebanon, Qatar etc.) and an online presence.
            </p>
          </div>

          <div className="col-md-2">
            <h6>Models</h6>
            <ul className="footer-links">
              <li className="listitem_footer">
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  BMW
                </Link>
              </li>

              <li className="listitem_footer">
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Mercedes
                </Link>
              </li>
              <li className="listitem_footer">
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Opel
                </Link>
              </li>
              <li className="listitem_footer">
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Jeep
                </Link>
              </li>
            </ul>
          </div>

          <div className=" col-md-3">
            <h6>legal</h6>
            <ul className="footer-links">
              <li className="listitem_footer">
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Privacy & Policy
                </Link>
              </li>
              <li className="listitem_footer">
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Payment Methods
                </Link>
              </li>
              <li className="listitem_footer">
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Delivery
                </Link>
              </li>
              <li className="listitem_footer">
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Return & Exchanges
                </Link>
              </li>
            </ul>
          </div>
          <div className=" col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li className="listitem_footer">
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About Us
                </Link>
              </li>
              <li className="listitem_footer">
                <Link
                  to="/gallery"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Gallery
                </Link>
              </li>

              <li className="listitem_footer">
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="" target="_blank">
                {" "}
                WAEL MASRI.
              </a>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
