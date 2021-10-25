import React, { useState, useEffect } from "react";
import "./Style.css";
import { Link } from "react-router-dom";



const Footer = () => {
  
  

  

  return (
    <footer className="site-footer">
      <div className="container-fluid">
        <div className="row">
          <div className=" col-md-4">
            <h6>About Us</h6>
            <p className="text-justify p_footer">
              With 20 years of presence and expertise in the Middle East and the
              Gulf market, 85 stores across 9 countries (UAE, Kuwait, Saudi
              Arabia, Egypt, Lebanon, Qatar etc.) and an online presence.
            </p>
            <hr />
            <div className="info_footer">
             
              Lebanon,tripoli-mina
            </div>
            <div className="info_footer">
               00961-71620485
            </div>
            <div className="info_footer">
              
              masri_1997@hotmail.com
            </div>
          </div>

          <div className="col-md-2">
            <h6>Categories</h6>
            <ul className="footer-links">
            <li className="listitem_footer" >bosss</li>

            <li className="listitem_footer" >ssss</li>
            <li className="listitem_footer" >ssss</li>
            <li className="listitem_footer" >ssss</li>
           
            </ul>
          </div>

          <div className=" col-md-2">
            <h6>legal</h6>
            <ul className="footer-links">
              <li className="listitem_footer">
                <Link to="#">
                  
                  Privacy & Policy
                </Link>
              </li>
              <li className="listitem_footer">
                <Link to="#">
                  
                  Payment Methods
                </Link>
              </li>
              <li className="listitem_footer">
                <Link to="#">
                 
                  Delivery
                </Link>
              </li>
              <li className="listitem_footer">
                <Link to="#">
                 
                  Return & Exchanges
                </Link>
              </li>
              {/* <li className="listitem_footer"><Link to="/loginadmin"><ArrowRightAltIcon />For Admin</Link></li> */}
            </ul>
          </div>
          <div className=" col-md-4">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li className="listitem_footer">
                <Link to="/about">
                 
                  About Us
                </Link>
              </li>
              <li className="listitem_footer">
                <Link to="/brands/all">
                 
                  Brands
                </Link>
              </li>

              <li className="listitem_footer">
                <Link to="/contact">
                  
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="div_footer_sub">
              <label>
                Be the first to know about new arrivals, sales & promos!
              </label>
              <form >
                <input
                  id="standard-basic"
                  label="Subscribe"
                  
                  required
                />
                <button className="btn_sub" type="submit">
                 ssss
                </button>
              </form>
              <img alt="payment"  style={{ margin: "10px" }} />
            </div>
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
