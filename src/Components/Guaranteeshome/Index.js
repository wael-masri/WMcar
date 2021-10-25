import React from "react";
import "./Style.css";
const Guaranteeshome = () => {
  return (
    <div className="container containergua ">
      <div className="row">
        <div className="col-md-12  ">
          <h3 className="titlegua">The way it should be</h3>
        </div>
        <div className="col-md-6 text-center">
          <h3 className="color">Do more from home </h3>
          <p className="colorsub">Curbside pickup and delivery options available</p>    
        </div>
        <div className="col-md-6 text-center">
        <h3 className="color">Test drives for real life</h3>
          <p className="colorsub">24-hour take home test drives</p> 
        </div>
        <div className="col-md-6 text-center">
        <h3 className="color">Love it or return it</h3>
          <p className="colorsub">30-day money back (up to 1500 mi.)</p> 
        </div>
        <div className="col-md-6 text-center">
        <h3 className="color">All major systems covered</h3>
          <p className="colorsub">For 90 days or 4,000 miles (whichever comes first)</p>
        </div>
        <div className="col-md-12 text-center">
            <button className="btn_gua">SHOP ALL CARS</button>
        </div>
      </div>
    </div>
  );
};

export default Guaranteeshome;
