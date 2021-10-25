import React from "react";
import "./Style.css";
import searchimag from '../../Images/searchimage.svg'
const Searchcar = () => {
  return (
    <div className="containersearch">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <img src={searchimag} style={{width:'100%'}} />
          </div>
          <div className="col-md-6 boxtextsearch">
            <h3 className="titlesearchcar">Choose From Close to a Million Used Cars</h3>
            <p className="textsearchcar">
              Get access to our extensive selection of pre-owned vehicles for
              sale across the US, and see price ratings based on similar used
              car listings in your area, so you know when you’re getting a great
              deal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchcar;
